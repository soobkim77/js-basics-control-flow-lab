function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return "This one is on me!"
  }
    else if  (distance > 2000 && distance < 2500) {
      return "I will gladly take your thirty bucks."
    }
      else (distance > 2500) ;{
        return "No can do."
      }
}   

function ternaryCheckCity(cityName){
  if (cityName === "NYC") {
    return "Ok, sounds good.";
  }
    else {
      return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much."
  }
    else if (tip === "not as generous") {
      return "Thank you."
    }
      else {
        return "Bye."
      }
}