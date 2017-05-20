(function main(num1,num2,z,len,output){
  var x = (""+num1).split("");
  var y = (""+num2).split("");
  
function ConvertToEightBit(convert,len){

  //Setting all the numbers to be operated upon to the same amount of digits
  convert.reverse();
   for(var i = convert.length; i < len; i++){
    convert.push(0);
  }
}

x.length > y.length ? len = x.length : len = y.length;  

ConvertToEightBit(x,len);
ConvertToEightBit(y,len);
ConvertToEightBit(z,len);
 
 //parsing the numbers inputted to integers
function ConvertToNumber(convert,convert2,len){
  for(var i = 0; i < len; i++){
    convert[i] = parseInt(convert[i]);
    convert2[i] = parseInt(convert2[i]);
  }
}
ConvertToNumber(x,y,len);

function Add(x,y,z,len){
  for(var i = 0; i < len;i++){
    //Most Significant Digit Calculation
    z[i+1] = x[i] && z[i] || x[i] && y[i] || y[i] && z[i] || x[i] && y[i] && z[i];
    //Least Significant Digit Calculation
    z[i]= x[i] && !y[i] && !z[i] || !x[i] && y[i] && !z[i] || !x[i] && !y[i] && z[i] || x[i] && y[i] && z[i];
    //Converting True value back to Binary  
    z[i] === true  ? z[i] = 1 : z[i];  
  }

  //Ensuring numbers are presented in 4, 8, 12 ,16 etc... repesentation
  (function(output){
      output = output % 4 == 0 ? 0 : output;
      for(var i = 0; i < output; i++){
      z.push(0);  
    }
   
  })(4 - (z.length%4));

  //presenting answer in form of 0001 1010
  z = z.reverse().join("").match(/.{4}/g).join(' ');

  alert(z);
}
Add(x,y,z,len);
})(parseInt(prompt("First Number?")),parseInt(prompt("Second Number?")),[],0,0);