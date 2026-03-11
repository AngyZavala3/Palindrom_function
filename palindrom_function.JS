function palindromo(num2){
  let original=num2;
  let invertido=0;
 while(num2>0){ 
   invertido = (invertido * 10) +(num2%10);
  num2= Math.floor(num2/10);
 }
  if(original === invertido){
    return true;
  }else {
    return false;
        }
 } 
console.log(palindromo(121));

console.log(palindromo(13222));