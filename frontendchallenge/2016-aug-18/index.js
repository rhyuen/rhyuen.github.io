$(document).ready(function(){
  $.get("dataset.csv", function(data){
    var formattedData = $.csv.toObjects(data);

    //GLOBAL
    var departmentKeys = {};
    var aggDollarValues = {department: "Assorted", persons: 0.0, compensation: 0.0, expenses: 0.0};
    var mainContentState = formattedData;

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
      aggDollarValues = {department: "Assorted", persons: 0.0, compensation: 0.0, expenses: 0.0};
      $("#summary_data_content").find("tr:gt(0)").remove();
    }

    function clearMainDataTable(){
      $("#main_data_content").find("tr:gt(0)").remove();
    }

    function handleSummaryCompute(currDataCell){
      aggDollarValues.persons++;
      //Math with commas doesn't work well it seems.
      aggDollarValues.compensation += parseFloat(currDataCell.Remuneration.replace(/,/g , ""));
      aggDollarValues.expenses += parseFloat(currDataCell.Expenses.replace(/,/g , ""));
    }

    function drawSummaryTable(){
      $("#summary_data_content")
        .append($("<tr/>")
        .append($("<td/>", {text: aggDollarValues.department}))
        .append($("<td/>", {text: aggDollarValues.persons}))
        .append($("<td/>", {text: Math.ceil(aggDollarValues.compensation)}))
        .append($("<td/>", {text: Math.ceil(aggDollarValues.expenses)}))
      );
    }

    function updateMainDataTable(currDataCell){
      $("#main_data_content")
        .append($("<tr/>")
        .append($("<td/>", {text: currDataCell.Name}))
        .append($("<td/>", {text: currDataCell.Title}))
        .append($("<td/>", {text: currDataCell.Remuneration}))
        .append($("<td/>", {text: currDataCell.Department}))
        .append($("<td/>", {text: currDataCell.Expenses})));
    }

    //INITIAL LOAD BEGIN
    formattedData.map(function(currDataCell){
      handleDepartmentStats(currDataCell);
      handleSummaryCompute(currDataCell);
      updateMainDataTable(currDataCell);
    });
    drawSummaryTable();
    updateDepartmentFilter();
    //INITIAL LOAD END


    //REDRAW PAGE ON  DEPARTMENT FILTER
    $("#department_filter > li > a").click(function(){
      var currFilterValue = $(this).text();
      console.log(currFilterValue);

      clearMainDataTable();
      clearSummaryCompute();

      var filteredData = formattedData.filter(function(currDataCell){
        return currDataCell.Department === currFilterValue;
      });

      filteredData.map(function(currFilteredCell){
        handleSummaryCompute(currFilteredCell);
        updateMainDataTable(currFilteredCell);
      });

      drawSummaryTable();
    });
    //DEPARTMENT FILTER END;


    $("#compensation_sort > li > a").click(function(){

      var selectedOption = $(this).text();
      if(selectedOption === "Descending"){
        mainContentState.sort(function(firstItem, secondItem){
          if(parseFloat(secondItem.Remuneration) > parseFloat(firstItem.Remuneration)){
            return 1;
          }
          if(parseFloat(secondItem.Remuneration) < parseFloat(firstItem.Remuneration)){
            return -1;
          }
          return 0;
        });
        console.log(mainContentState);
      }else{
        mainContentState.sort(function(firstItem, secondItem){
          if(parseFloat(secondItem.Remuneration) > parseFloat(firstItem.Remuneration)){
            return -1;
          }
          if(parseFloat(secondItem.Remuneration) < parseFloat(firstItem.Remuneration)){
            return 1;
          }
          return 0;
        });
        console.log(mainContentState);
      }

      clearMainDataTable();
      mainContentState.map(function(currStateCell){
        updateMainDataTable(currStateCell);
      });
    });

    $("#expenses_sort > li > a").click(function(){

    });

    console.log(departmentKeys);

  });
});
