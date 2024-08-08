console.log("Script running...");
// Task 1: All off button
// Select the all off button and console log to confirm you selected successfully
let allOff = document.querySelector("#clear")

// Select all the lightbulb p tags and console log the length to confirm you selected successfully
let lightbulb = document.querySelectorAll(".lightbulb")

// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black

allOff.addEventListener("click", function(event){
  for(let i=0; i<lightbulb.length;i++){
  lightbulb[i].style.backgroundColor = "black";
 }
})




// Task 2: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
// Make sure to add an ID so you can select this button
let button = document.querySelector("#csh")
// Select the body and console log to confirm you selected successfully
let body = document.body
console.log(body)
// Add an event listener such that when your mouse is over CSH mode button, the background color of body becomes green and the text of the lightbulb tags becomes "💻"

button.addEventListener("mouseover",function(event){
  for(let i=0;i<lightbulb.length;i++){
  body.style.backgroundColor = 'green'
  lightbulb[i].textContent = "💻"
}
})




// Add an event listener such that when your mouse is off CSH mode button, the background color of body becomes black again and the text of the lightbulb tags goes back to "💡"
button.addEventListener("mouseout",function(event){
  for(let i=0;i<lightbulb.length;i++){
  body.style.backgroundColor = 'black'
  lightbulb[i].textContent = "💡"
}
})



// Task 3: On and off features
// Add an event listener to each lightbulb such that when you click it, the background color of that p tag changes to white
for(let i=0;i<lightbulb.length;i++){
lightbulb[i].addEventListener("click", function(event){
  lightbulb[i].style.backgroundColor = "white"
})
}





// Extra credit: use classList and toggle to the lightbulb class to toggle on AND off when you click each lightbulb
console.log(lightbulb.classList = "lightbulb toggle on and off")





