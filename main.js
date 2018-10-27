// Step 1a - Select and store each slider (range) input element
const redSlider = document.querySelector('#redSlider');
const blueSlider = document.querySelector('#blueSlider');
const greenSlider = document.querySelector('#greenSlider');



// Step 1b - Select and store each number input element

const redinput = document.querySelector('#redInput');
const greeninput = document.querySelector('#greenInput');
const blueinput = document.querySelector('#blueInput');

// Step 1c - Select and store the colourPreview and message elements
const colourPreview = document.querySelector('#colourPreview');
const message = document.querySelector('#message');


// Step 1d - Select and store the .chosenColour node list
// in a variable called chosenColours
const chosenColours = document.querySelector('#chosenColour');


// Step 2 - Create a function called sliderUpdate that takes an
// event as an argument

function sliderUpdate(event) {
  
  // Step 2a - Using destructuring, store the red, green, and blue slider values
  // into variables called r, g, and b
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

  // Step 2b - Create a variable called rgb and store the following format
  // using interpolation to parse the r, g, and b values:
  // rgb(r, g, b)
    var rgb = `rgb(${r},${g},${b})`;

  // Step 2c - Access the style property of colourPreview and change
  // the background colour to our rgb variable value
  colourPreview.style.backgroundColor = rgb;

  // Step 2d - Using colourPreview as the parent, select the #rgb element
  // and change the text content to equal our rgb variable value
    colourPreview.querySelector('#rgb').textContent = rgb;

  // Step 2e - Using the event argument, access the target, then the parentElement,
  // then select the child, input[type="number"], and then its value property.
  // Make it equal the event target's value
 
 event.target.parentNode.childNodes[5].value = event.target.value;


}


// Step 3 - Create a function called inputUpdate that takes an event
// as an argument
function inputUpdate(event) {
  

  // Step 3a - Using destructuring, store the red, green, and blue input values
  // into variables called r, g, and b
    const r = redinput.value;
    const g = greeninput.value;
    const b = blueinput.value;

  // Step 3b - Create a variable called rgb and store the following format
  // using interpolation to parse the r, g, and b values:
  // rgb(r, g, b)

    var rgb = `rgb(${r},${g},${b})`;
  // Step 3c - Access the style property of colourPreview and change
  // the background colour to our rgb variable value
    colourPreview.style.backgroundColor = rgb;


  // Step 3d - Using colourPreview as the parent, select the #rgb element
  // and change the text content to equal our rgb variable value
    colourPreview.querySelector('#rgb').textContent = rgb;

  // Step 3e - Using the event argument, access the target, then the parentElement,
  // then select the child, input[type="range"], and then its value property.
  // Make it equal the event target's value
  event.target.parentNode.childNodes[3].value = event.target.value;

}


// Step 4a - Without pushing to an array, create an array structure that contains
// the 3 slider elements. Call the for each method and iterate through each element.
// Using an arrow (or anonymous) function, subscribe the element to the oninput event,
// providing the sliderUpdate function as the callback argument
var sliderarray = [redSlider,greenSlider,blueSlider];

sliderarray.forEach(function (element) {
  element.oninput = sliderUpdate;
})

// Step 4b - Without pushing to an array, create an array structure that contains
// the 3 input elements. Call the for each method and iterate through each element.
// Using an arrow (or anonymous) function, subscribe the element to the oninput event,
// providing the inputUpdate function as the callback argument

var inputarray = [redinput,greeninput,blueinput];
inputarray.forEach(function (element) {
  element.oninput = inputUpdate;

})

// Step 5 - Create a function that has one parameter called msg
function messagechange(msg) {
  

  // Step 5a - Change the message text to equal the argument msg
  message.textContent = msg;

  // Step 5b - Using a function that delays execution, change the
  // message content back to an empty string after 1500ms
  setTimeout(
    () => message.textContent = " "
   ,1500 ) 

}



// Step 6a - Create a new event called 'itsGreat'
let itsGreat = new Event('itsGreat');

// Step 6b - Create a new event called 'selected'
let selected = new Event('selected');

// Step 6c - Add a new event listener to the message element that
// listens for 'itsGreat', and set the callback to call setMessage with the 
// argument "It's going to look great!"

message.addEventListener('itsGreat',function (event) {
  messagechange("It's going to look great!");
})


// Step 6d - Add a new event listener to the message element that
// listens for 'selected', and set the callback to call setMessage with the 
// argument "That's an awesome colour!"
message.addEventListener('selected',function (event) {
  messagechange("That's an awesome colour!");
})


// Step 7 - Create a variable called 'pickedColour' and set its value to '#000'
var pickedColour = '#000';

// Step 8 - Subscribe colourPreview to a click event listener. Use an anonymous function
// as a the callback
    colourPreview.addEventListener('click',function (event) {
      // body...
    
  // Step 8a - Using a condition statement, check if the #rgb content is currently
  // an empty string
      if(!colourPreview.querySelector('#rgb').value){
    // Step 8b - If it is, change the value of pickedColour to '#000'
          colourPreview.querySelector('#rgb').textContent = pickedColour;

      }else{

    // Step 8c - Otherwise, change the value to the #rgb content

        colourPreview.querySelector('#rgb').textContent = event.target.value;
      }

  // Step 8d - Publish the 'selected' event

message.dispatchEvent(selected);

})
// Step 9 - Using a for/of loop, iterate through chosenColours
// setting the initializer variable to chosenColour
for(let chosenColour in chosenColours){
  // Step 9a - Subscribe chosenColour to a click event, using
  // an anonymous function that takes an event as an argument
        
          onclickaction(function (event) {
            event.target.body.style.backgroundColor = pickedColour;
          })
    // Step 9b - Access the background colour of the event target
    // and make it equal to the pickedColour value
      chosenColour.addEventListener('click',onclickaction);

    // Step 9c - Publish the 'itsGreat' event
      message.dispatchEvent(itsGreat);
}
