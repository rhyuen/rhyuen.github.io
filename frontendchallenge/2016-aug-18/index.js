$(document).ready(function(){
  $.get("dataset.csv", function(data){
    var formattedData = $.csv.toObjects(data);
    console.log(formattedData);

    //GLOBAL
    var departmentKeys = {};
    var aggDollarValues = {department: "Assorted", persons: 0.0, compensation: 0.0, expenses: 0.0};

    function handleDepartmentStats(currCell){
      if(departmentKeys[currCell.Department] === undefined){
        departmentKeys[currCell.Department] = 1;
      }else{
        departmentKeys[currCell.Department]++;
      }
    }

    function updateDepartmentFilter(){
      for(key in departmentKeys){
        $("#department_filter")
          .append($("<li/>")
          .append($("<a/>", {href : "#", text: key})));
      }
    }

    function clearSummaryCompute(){
      
    }

    function handleSummaryCompute(currDataCell){
      aggDollarValues.persons++;
      aggDollarValues.compensation += parseFloat(currDataCell.Remuneration);
      aggDollarValues.expenses += parseFloat(currDataCell.Expenses);
    }

    function drawSummaryTable(){
      //Add a Check to Clearout existing rows.
      $("#summary_data_content")
        .append($("<tr/>")
        .append($("<td/>", {text: aggDollarValues.department}))
        .append($("<td/>", {text: aggDollarValues.persons}))
        .append($("<td/>", {text: aggDollarValues.compensation}))
        .append($("<td/>", {text: aggDollarValues.expenses}))
      );
    }

    formattedData.map(function(currDataCell){
      handleDepartmentStats(currDataCell);
      handleSummaryCompute(currDataCell);
      $("#main_data_content")
        .append($("<tr/>")
        .append($("<td/>", {text: currDataCell.Name}))
        .append($("<td/>", {text: currDataCell.Title}))
        .append($("<td/>", {text: currDataCell.Remuneration}))
        .append($("<td/>", {text: currDataCell.Department}))
        .append($("<td/>", {text: currDataCell.Expenses})));
    });
    drawSummaryTable();
    updateDepartmentFilter();


    //REDRAW PAGE ON FILTER
    $("#department_filter > li > a").click(function(){
      var currFilterValue = $(this).text();
      console.log(currFilterValue);
      $("#main_data_content").find("tr:gt(0)").remove();
      var filteredData = formattedData.filter(function(currDataCell){
        return currDataCell.Department === currFilterValue;
      });

      filteredData.map(function(currFilteredCell){
        $("#main_data_content")
          .append($("<tr/>")
          .append($("<td/>", {text: currFilteredCell.Name}))
          .append($("<td/>", {text: currFilteredCell.Title}))
          .append($("<td/>", {text: currFilteredCell.Remuneration}))
          .append($("<td/>", {text: currFilteredCell.Department}))
          .append($("<td/>", {text: currFilteredCell.Expenses})));
      });
      drawSummaryTable();
    });



    console.log(departmentKeys);

  });
});
