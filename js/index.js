//index.js

if("serviceWorker" in navigator){
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function(){
      console.log("Service Worker Registered");
    });
}


if(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)){
  console.log("Mobile Browser in use.");
}else{
  console.log("Desktop Browser in use.");
}
