//Count Vowel
 let countarray=[];
let b=0;
let a= prompt("Enter String");
const myArray = a.split("");
let count=()=>{
    for(let i=0;i<myArray.length;i++)
    {
        if(myArray[i]=="a" || myArray[i]=="e" || myArray[i]=="i" ||myArray[i]=="o" ||myArray[i]=="u" )
        {
           b++; 
           countarray.push(myArray[i]);   

        }
        
    }
    console.log("Total ="+b);
}
count();

// console.log("Strings")
for(let j=0;j<countarray.length;j++)
{
    console.log(countarray[j]);
}
