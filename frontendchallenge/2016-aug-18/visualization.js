$(document).ready(function(){
  $.get("./dataset.csv", function(data){
    var formattedData = $.csv.toObjects(data);
    var remunerationData = [];
    for(var i =0; i < formattedData.length; i++){
      remunerationData.push(parseFloat(formattedData[i].Remuneration.replace(/,/g , ""))/10000);
    }

    d3.select("#chart")
      .selectAll("div")
      .data(remunerationData)
      .enter()
      .append("div")
      .style("height", function(d){
        return d + "px";
      });

    var colorMap = d3.interpolateRgb(
      d3.rgb("#d6e685"),
      d3.rgb("#1e6823")
    );

    var heatremuneration = remunerationData.map(function(currItem){
      return currItem/10;
    });

    d3.select("#heatmap")
      .selectAll("div")
      .data(heatremuneration)
      .enter()
      .append("div")
      .style("background-color", function(d){
        return (d === 0) ? "#eee": colorMap(d);
      });

  });
});
