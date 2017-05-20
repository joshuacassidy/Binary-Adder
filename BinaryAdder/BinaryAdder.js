(function main(num1,num2,z){
  var x = (""+num1).split("");
  var y = (""+num2).split("");

function ConvertToEightBit(convert){
  convert.reverse();
   for(var i = convert.length; i < 8; i++){
    convert.push(0);
  }
}

ConvertToEightBit(x);
ConvertToEightBit(y);
ConvertToEightBit(z);
 
function ConvertToNumber(convert,convert2){
  for(var i = 0; i < 8; i++){
    convert[i] = parseInt(convert[i]);
    convert2[i] = parseInt(convert2[i]);
  }
}
ConvertToNumber(x,y);

function Add(x,y,z){
  for(var i = 0; i < 8;i++){
    //Most Significant Digit
    z[i+1] = x[i] && z[i] || x[i] && y[i] || y[i] && z[i] || x[i] && y[i] && z[i];
    //Least Significant Digit
    z[i]= x[i] && !y[i] && !z[i] || !x[i] && y[i] && !z[i] || !x[i] && !y[i] && z[i] || x[i] && y[i] && z[i];
    //Converting True value back to Binary  
    z[i] === true  ? z[i] = 1 : z[i];  
  }
  z = z.reverse().join("");
  alert(z);
}
Add(x,y,z);
})(parseInt(prompt("num?")),parseInt(prompt("num?")),[]);