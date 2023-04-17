
/// Sort the users array in ascending order of lastOrderDate.

let user=[
    {
        firstName :"Hamza",
        lastName:"Shaukat",
        age:24,
        gender:"male",
        lastOrderDate:"Mar 6 2012 10:00:00 AM",
        totalOrders:4
    },
    {
        firstName :"Umair",
        lastName:"Malik",
        age:25,
        gender:"male",
        lastOrderDate:"Mar 8 2012 10:00:00 AM",
        totalOrders:2

    },
    {
        firstName :"Zohaib",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"Mar 5 2012 10:00:00 AM",
        totalOrders:1

    },
    {
        firstName :"Kashif",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"Mar 2 2012 10:00:00 AM",
        totalOrders:2
    },
    {
        firstName :"Saqib",
        lastName:"Ali",
        age:24,
        gender:"male",
        lastOrderDate:"Mar 1 2012 10:00:00 AM",
        totalOrders:2
    },
    {
        firstName :"Mumtaz",
        lastName:"Ali",
        age:24,
        gender:"male",
        lastOrderDate:"Mar 8 2012 10:00:00 AM",
        totalOrders:9
    },
    {
        firstName :"Sohail",
        lastName:"Akhter",
        age:22,
        gender:"male",
        lastOrderDate:"Mar 10 2012 10:00:00 AM",
        totalOrders:7
    },
    {
        firstName :"Azhir",
        lastName:"Mehmood",
        age:21,
        gender:"male",
        lastOrderDate:"Mar 9 2012 10:00:00 AM",
        totalOrders:9
    },
    {
        firstName :"Owais",
        lastName:"Ali",
        age:20,
        gender:"male",
        lastOrderDate:"Mar 14 2012 10:00:00 AM",
        totalOrders:4
    },
    {
        firstName :"Taimoor",
        lastName:"Ahmed",
        age:26,
        gender:"male",
        lastOrderDate:"Mar 7 2012 10:00:00 AM",
        totalOrders:6
    },
    {
        firstName :"Bilal",
        lastName:"Akhter",
        age:25,
        gender:"male",
        lastOrderDate:"Mar 3 2012 10:00:00 AM",
        totalOrders:2
    },
    {
        firstName :"Atif",
        lastName:"Abbasi",
        age:24,
        gender:"male",
        lastOrderDate:"Mar 1 2012 10:00:00 AM",
        totalOrders:3
    },
]


let Ascending_sort_user = user.sort(Ascending_function=(a,b)=>{

    // return a.lastOrderDate - b.lastOrderDate;
    return new Date(a.lastOrderDate) - new Date(b.lastOrderDate);

});
console.log(Ascending_sort_user);