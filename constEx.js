const x=10;
var ss=function(){
     const x=20;
     {
         const x=30;
        // x=40;
         console.log("x value is"+x);
     }
     console.log("x value is:"+x);
}
ss();
console.log("x value is:"+x);