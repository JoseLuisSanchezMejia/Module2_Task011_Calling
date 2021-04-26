
//this is part I: fhey kiddo

//here below I made the first function
const checkIfAdult= function(age){
if (age >=18){
   return true;
}
else {return false;}
};

const greet = function (age){
   let result=checkIfAdult(age);
   if (result===true){
      return "Hello there";
   }
   else{
      return "Hello kiddo";
   }
};
//here above I made the second function which calls the first using the variabel result. 

console.log(greet(17));
console.log(greet(-17));
console.log(greet(37));
console.log(greet(117));

 //this is part II: VAT calculations
//this is part II exercise I
const calcVat= function (vat){
   const vatMulti=Math.round((1+(vat/100)));
   return vatMulti;
};



const calculate= function (base, vat){
   const totalPrice= base* calcVat(vat);
   return totalPrice
};

console.log(calculate(100, 9));
console.log(calculate(100, 21));

//this is part II exercise II
const calcBase= function (price, vat){
   const base= price/Math.round((1+(vat/100)));
   return base;
};

const calculate2= function (price, vat){
   const result= [calcBase(price, vat), vat];
   return result;
};

console.log(calculate2(109, 9.0));
console.log(calculate2(121, 21));

