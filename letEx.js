let x=10;
var ss=function (){
  let x=20;
  {
     let x=30;
  console.log("x value is::"+x);
  }
  console.log("x value is"+x);
}
ss();
console.log("x value is:"+x);