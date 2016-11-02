if(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)){
  console.log("Mobile Browser in use. Redirect to mobile site.");
}else{
  console.log("Desktop Browser in use.");
}
