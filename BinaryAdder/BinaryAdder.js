(function main(num1,num2,z){
  var x = (""+num1).split("");
  var y = (""+num2).split("");
  var len = 0;
function ConvertToEightBit(convert,len){

  convert.reverse();
   for(var i = convert.length; i < len; i++){
    convert.push(0);
  }
}
x.length > y.length ? len = x.length : len = y.length;  

ConvertToEightBit(x,len);
ConvertToEightBit(y,len);
ConvertToEightBit(z,len);
 
function ConvertToNumber(convert,convert2,len){
  for(var i = 0; i < len; i++){
    convert[i] = parseInt(convert[i]);
    convert2[i] = parseInt(convert2[i]);
  }
}
ConvertToNumber(x,y,len);

function Add(x,y,z,len){
  for(var i = 0; i < len;i++){
    //Most Significant Digit
    z[i+1] = x[i] && z[i] || x[i] && y[i] || y[i] && z[i] || x[i] && y[i] && z[i];
    //Least Significant Digit
    z[i]= x[i] && !y[i] && !z[i] || !x[i] && y[i] && !z[i] || !x[i] && !y[i] && z[i] || x[i] && y[i] && z[i];
    //Converting True value back to Binary  
    z[i] === true  ? z[i] = 1 : z[i];  
  }
  z[z.length-1] === 0 ? z.pop() : z;
  z = z.reverse().join("");
  alert(z);
}
Add(x,y,z,len);
})(parseInt(prompt("First Number?")),parseInt(prompt("Second Number?")),[]);