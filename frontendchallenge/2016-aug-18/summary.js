$(document).ready(function(){
  $.get("./dataset.csv", function(data){
    var formattedData = $.csv.toObjects(data);
    

  });
});
