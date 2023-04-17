//) write a function that finds the first user with total orders greater than a given number.


let user=[
    {
        firstName :"Hamza",
        lastName:"Shaukat",
        age:24,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:4
    },
    {
        firstName :"Umair",
        lastName:"Malik",
        age:25,
        gender:"male",
        lastOrderDate:"17-4-2023",
        totalOrders:2

    },
    {
        firstName :"Zohaib",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:1

    },
    {
        firstName :"Kashif",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:2
    },
    {
        firstName :"Saqib",
        lastName:"Ali",
        age:24,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:2
    },
    {
        firstName :"Mumtaz",
        lastName:"Ali",
        age:24,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:9
    },
    {
        firstName :"Sohail",
        lastName:"Akhter",
        age:22,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:7
    },
    {
        firstName :"Azhir",
        lastName:"Mehmood",
        age:21,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:9
    },
    {
        firstName :"Owais",
        lastName:"Ali",
        age:20,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:4
    },
    {
        firstName :"Taimoor",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:6
    },
    {
        firstName :"Bilal",
        lastName:"Akhter",
        age:25,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:2
    },
    {
        firstName :"Atif",
        lastName:"Abbasi",
        age:24,
        gender:"male",
        lastOrderDate:"16-4-2023",
        totalOrders:3
    },
]

let chechkOrder=(element)=>{
    //element.totalOrders= element.totalOrders>3;
    //return element;
    return element.totalOrders>3;
   
}
let find2 =user.filter(chechkOrder);

console.log(find2);
console.log("NEstxt=====>");
console.log(user);