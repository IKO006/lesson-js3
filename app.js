// 1 number
var myAge = 17

// 2 string
var myNameIs = "Iko"

// 3 boolean
var isRainy = false

//4 null
var myBrother = null

// 5 underfined
var myDog;

// 6 object {} = [] array
var phone = {
    model:"14 Pro",
    color:"black",
    price:1400,
    owner: myNameIs
}


//------- Conditions ---------//шарттар условия( if,switch)
// готовые Функции (alert, prompt, confirm)

var color = 'green'

//операторы (= == === ! ?? && ||)
// red === red --> true
if(color === 'red'){
    console.log("STOP");
}else if (color === 'green') {
    console.log("Go ...");
}else if ( color === 'yellow'){
    console.log("Wait ...")
}else{
    console.log("No Color")
}











var operation = "/"

if(operation === "+"){
    console.log(100+50)
}else if(operation === "-"){
    console.log(100-50)
}else if(operation === "*"){
    console.log(100*50)
}else if( operation === "/"){
    console.log(100/50)
}


var temp = 36
if(temp > 41){
    console.log("Кун ысыккы ...");
}else if (temp > 35 && temp < 40){
    console.log("Кун ысыккы ... Абдан ысыккы");
}

//alert(myNameIs)

//var text = prompt("what is your name")
//if(text.toLowerCase() === "iko") {
    console.log("Yes I am");
//}

//weeks

var someText = "Monday"

switch(someText){
    case "Monday":
        console.log("Понедельник");
        break;
        case "Sunday":
            console.log("Воскресенье");
            break;
        default:
        break;
}

if(!true){
    console.log("TRUE----");
}else{
    console.log("FALSE----");
}

var userDB = {
    name: "Iko",
    email:"iko000@gmail.com",
    password:"qwerty123"
}

// check password


