//TAsk1

let obj1 ={
    fname: "HAmza",
    lname:"Shaukat",
    gender:"male"
};

let duplicate=(obj1)=>{
    let obj2={...obj1};
    obj1.fname="sohail";
    console.log(obj1);
    console.log(obj2);

}
duplicate(obj1);



