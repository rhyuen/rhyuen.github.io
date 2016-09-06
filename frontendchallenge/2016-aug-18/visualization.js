$(document).ready(function(){
  $.get("./dataset.csv", function(data){
    var formattedData = $.csv.toObjects(data);
    var remunerationData = [];
    for(var i =0; i < formattedData.length; i++){
      remunerationData.push(parseFloat(formattedData[i].Remuneration.replace(/,/g , "")));
    }


    var salaryBuckets = {};
    for(var bucket = 75; bucket < 300; bucket+=5){
      salaryBuckets[bucket.toString()] = 0;
    }

    function determineSalaryBucket(salary){
      for(var i = 300000; i > 75000; i-=5000){
        if(salary > i){
          var key = (i.toString().length === 6)
            ? i.toString().substring(0,3)
            : i.toString().substring(0,2);
          salaryBuckets[key]++;
          return;
        }
      }
    }

    for(var i = 0; i < remunerationData.length; i++){
      determineSalaryBucket(remunerationData[i])
    }

    var grapharray = [];
    for(var key in salaryBuckets){
      grapharray.push(salaryBuckets[key]);
    }

    d3.select("#chart")
      .selectAll("div")
      .data(grapharray)
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
      return currItem/100000;
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
