d3.select("#chart")
  .selectAll("div")
  .data([4,8,15,16,23,42])
  .enter()
  .append("div")
  .style("height", function(d){
    return d + "px";
  });

var colorMap = d3.interpolateRgb(
  d3.rgb("#d6e685"),
  d3.rgb("#1e6823")
);

d3.select("#heatmap")
  .selectAll("div")
  .data([.2, .4, 0, 0, .13, .92])
  .enter()
  .append("div")
  .style("background-color", function(d){
    return (d === 0) ? "#eee": colorMap(d);
  });
