$(document).ready(function(){
  $.get("dataset.csv", function(data){
    var formattedData = $.csv.toObjects(data);

    //GLOBAL
    var departmentKeys = {};
    var aggDollarValues = {department: "All", persons: 0.0, compensation: 0.0, expenses: 0.0};
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

    //Something is incorrect here. String cannot be spliced
    //SLICE
    function insertCommasInNumbers(number){
      var StringWithCommas = number.toString();
      var numOfCommasToInsert = Math.floor(number.length / 3 );

      if(StringWithCommas.length > 3){
        for(var count = 0; count < numOfCommasToInsert; count++){
          StringWithCommas = StringWithCommas.splice(1 + 4*count, 0, ",");
          console.log(StringWithCommas);
        }

        return StringWithCommas;
      }else{
        return StringWithCommas;
      }
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

      //USE ORIGINAL DATA INSTEAD OF STATE B/C VALUES CHANGE
      var filteredData = formattedData.filter(function(currDataCell){
        return currDataCell.Department === currFilterValue;
      });

      filteredData.map(function(currFilteredCell){
        handleSummaryCompute(currFilteredCell);
        updateMainDataTable(currFilteredCell);
      });

      //UPDATE GLOBAL STATE WITH FILTERED DATA
      mainContentState = filteredData;
      drawSummaryTable();
    });
    //DEPARTMENT FILTER END;


    $("#compensation_sort > li > a").click(function(){

      //DO A PARENT CHECK.
      //$(this).parent().parent() === "some selector"

      var selectedOption = $(this).text();
      mainContentState.sort(function(firstItem, secondItem){
        if(parseFloat(secondItem.Remuneration) > parseFloat(firstItem.Remuneration)){
          return (selectedOption === "Descending") ? 1 : -1;
        }
        if(parseFloat(secondItem.Remuneration) < parseFloat(firstItem.Remuneration)){
          return (selectedOption === "Descending") ? -1 : 1;
        }
        return 0;
      });
      console.log(mainContentState);


      clearMainDataTable();
      mainContentState.map(function(currStateCell){
        updateMainDataTable(currStateCell);
      });
    });

    $("#expenses_sort > li > a").click(function(){

    });

  });
});
