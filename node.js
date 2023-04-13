
let string1=prompt("Enter String");
let stringReverse=(string1)=>{

  let strreverse =string1.split("").reverse().join("");
  if(string1==strreverse)
  {
    console.log("Palindrome");
  }
  else{
    console.log("Not Palindrome");
  }
}

stringReverse(string1);