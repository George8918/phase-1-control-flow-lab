function scuberGreetingForFeet(ride){
  // Write your code here!
let greeting;

  if (ride <= 400) {
    greeting= 'This one is on me!';
    
  } else if (400<=ride && ride <= 2000){
    greeting= 'That will be twenty bucks.';
    
  } else if (ride > 2500) {
    greeting = 'No can do.';
    
  } else {
    greeting =  'I will gladly take your thirty bucks.';
  
  }
  return greeting;

}

function ternaryCheckCity(cityName){
  // Write your code here!
const message = cityName === "NYC" ? "Ok, sounds good." : "No go.";
return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipGreeting;

  switch(tip) {
  case "generous":
    tipGreeting = "Thank you so much.";
    break;
  
  case "not as generous":
    tipGreeting = "Thank you.";
    break;

  default:
    tipGreeting = 'Bye.';
    break;

  }
  return tipGreeting;
}