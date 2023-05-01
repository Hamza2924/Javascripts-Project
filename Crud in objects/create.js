
let user=[
    {
        id:1,
        firstName :"Hamza",
        lastName:"Shaukat",
        age:24,
        gender:"male",
        lastOrderDate:"Mar 6 2012 10:00:00 AM",
        totalOrders:4
    },
    {
        id:2,
        firstName :"Umair",
        lastName:"Malik",
        age:25,
        gender:"male",
        lastOrderDate:"Mar 8 2012 10:00:00 AM",
        totalOrders:2

    },
    {
        id:3,
        firstName :"Zohaib",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"Mar 5 2012 10:00:00 AM",
        totalOrders:1

    },
    {
        id:4,
        firstName :"Kashif",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"Mar 2 2012 10:00:00 AM",
        totalOrders:2
    },
    {
        id:5,
        firstName :"Saqib",
        lastName:"Ali",
        age:24,
        gender:"male",
        lastOrderDate:"Mar 1 2012 10:00:00 AM",
        totalOrders:2
    },
    {
        id:6,
        firstName :"Mumtaz",
        lastName:"Ali",
        age:24,
        gender:"male",
        lastOrderDate:"Mar 8 2012 10:00:00 AM",
        totalOrders:9
    },
    {
        id:7,
        firstName :"Sohail",
        lastName:"Akhter",
        age:22,
        gender:"male",
        lastOrderDate:"Mar 10 2012 10:00:00 AM",
        totalOrders:7
    },
    {
        id:8,
        firstName :"Azhir",
        lastName:"Mehmood",
        age:21,
        gender:"male",
        lastOrderDate:"Mar 9 2012 10:00:00 AM",
        totalOrders:9
    },
    {
        id:9,
        firstName :"Owais",
        lastName:"Ali",
        age:20,
        gender:"male",
        lastOrderDate:"Mar 14 2012 10:00:00 AM",
        totalOrders:4
    },
    {
        id:10,
        firstName :"Taimoor",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"Mar 7 2012 10:00:00 AM",
        totalOrders:6
    },
]

let create1 ={
    id:20,
    firstName :"Azhir",
    lastName:"malik",
    age:32,
    gender:"male",
    lastOrderDate:"Mar 7 2012 10:00:00 AM",
    totalOrders:9
    
}

let createObject =(user)=>{

    return user.push(create1);

}
createObject(user);

console.log(user);
