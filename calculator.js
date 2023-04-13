
//Calculator
let n=10;
console.log("Calculator");
for(let i=0;i<n;n++){


let input =prompt("Enter input");
if(input=='*')
{
    let value1=prompt("Value1");
    let value2=prompt("Value2");
    console.log("Result =" ,value1 * value2);
    n++;
}
else if(input=='/')
{
    let value1=prompt("Value1");
    let value2=prompt("Value2");
    let total=value1 / value2;
    console.log("Result =",total);
    n++;

}
else if(input=='+')
{
    let value1=parseInt(prompt("Value1"));
    let value2=parseInt(prompt("Value2"));
    let total=parseInt(value1) + parseInt(value2);
    console.log("Result =" ,total);
    n++;

}
else if(input=='-')
{
    let value1=prompt("Value1");
    let value2=prompt("Value2");
    let total=value1 - value2;
    console.log("Result =" ,total);
    n++;
}
}

