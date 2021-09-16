

module.exports=getDate;

 function getDate(){
var today=new Date();
var options={
 
  day:"numeric",
  weekday:"long",
  month:"long"
};

var day = today.toLocaleDateString("en-US",options);

return day;
 }