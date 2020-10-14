// C section
// let theClass = ["Denis", "Jaynaba", "Hayley", "Caroline", "Alison", "Michelle", "Victoria", 
// "Cayden",  "Connor", "Aron", "Nathan", "Weileen", "Yuhao", 
// "Micah", "Jia", "Brian", "Katrina"]

// A section
var myVariable = 599;
var myOther = true;
let theClass = ["Pamela", "Edmund", "Leon", "Annie", "Derek", "Julia", "Christian", 
"Leslie",  "Halenur", "Annlie", "Laiba","Steffi", "Junwei", "Ruiqi", 
"Hosanna", "Brandon", "Nicole"]
console.log(theClass.length)

const theBody = document.querySelector('body');
const theTxt = document.querySelector('h3');
const theButton = document.querySelector("button");

theButton.addEventListener('click', theShuffle);

function theShuffle() {
     theButton.style.backgroundColor = "yellow"
     let theResults = []; 
     theClass.sort(() => Math.random() - 0.5);
     // console.log(theClass)
     for (let i =0; i < theClass.length; i++){
     //  console.log(theClass[i]);
      var node = document.createElement("p"); 
     theResults[i] = document.createTextNode(theClass[i]); 
     node.appendChild(theResults[i]);  
     // document.querySelector("h3").appendChild(node); 
     theTxt.appendChild(node); 
     theResults.splice(0, theResults.length);
     }     
}





