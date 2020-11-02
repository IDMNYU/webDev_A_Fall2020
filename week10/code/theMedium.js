console.log("the Message!!");

let theYear =  ["jan", "feb", "march"]
// console.log(typeof theYear)
// console.log(typeof myName)

theYear.push("april")
for (var i = 0; i <theYear.length; i++){
 // console.log(theYear[i]);
}
// pass the HTML element into a variable
// 
let theBody = document.querySelector('body');
// console.log(theBody);
let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
//
// triggering an event with a callback function
theButton.addEventListener('click', thePotatoe);

function thePotatoe(){
 console.log("cick!!!");
 theBody.style.backgroundColor = 'yellow';
 theBody.style.color = 'green';
 document.querySelector('h2').textContent = "you pressed the button!";
}

// triggering an event with ES6 arrow notation:
document.addEventListener('keydown', theEvent => {
 if (theEvent.keyCode === 32){
  theTxt.textContent = "you pressed space";
 }
})

// common ways of triggering a function you'll often see online
document.addEventListener('keydown',function() {
 console.log("you pressed any key!")
})

