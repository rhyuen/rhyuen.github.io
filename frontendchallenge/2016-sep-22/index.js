function httpGet(url, cb){
  var httpReq = new XMLHttpRequest();
  httpReq.onreadystatechange = function(){
    if(httpReq.readyState === 4 && httpReq.status == 200){
      cb(httpReq.responseText);      
    }
  }
  httpReq.open("GET", url, true);
  httpReq.send(null);
}


httpGet("/frontendchallenge/2016-sep-22/data.json", function(content){
  console.log(content);
});
