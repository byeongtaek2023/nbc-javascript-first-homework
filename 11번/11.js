const today = new Date();
const hours = today.getHours();
console.log(hours);
 if (hours < 10) {
    console.log("Good Morning")
} else if (hours  =>10 , hours <=18) {
    console.log("Good Afternoon") 
} else if(hours >18 ) {
    console.log("Good Evening")
};

