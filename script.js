const button = document.querySelector("button"); //document means targeting something in the HTML, querySelector means targeting a specific element, in this case the button
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

button.addEventListener("click", function() { //addEventListener means waiting for an event/prompt to happen, in this case a click on the button, and then running a function when that event happens
  const name = prompt("What is your name?"); //prompt means asking the user for input, in this case their name
  heading.textContent = `hi, ${name}!`; //textContent means changing the text of the html tag/element and what the user sees, in this case the heading, to include the user's name
  const mood = prompt("How are you feeling today?"); //asking the user for their mood
  paragraph.textContent = `Today's mood: ${mood}`; //changing the text of the paragraph to include the user's mood
  button.textContent = "clicked!"; //changing the text of the button to "clicked!" when it is clicked
  console.log("the button has been clicked"); //see the output, fix bugs error, testing, and debugging, in this case to see if the button has been clicked. flow of the code.
  console.log("heading has been changed to include the user's name");
  })