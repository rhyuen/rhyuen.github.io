function httpGet(url, cb){
  var httpReq = new XMLHttpRequest();
  httpReq.onreadystatechange = function(){
    if(httpReq.readState === 4 && httpReq.status == 200)
      cb(httpReq.responseText);
  }
  httpReq.open("GET", url, true);
  http.send(null);
}
