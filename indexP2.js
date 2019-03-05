function dwarfRollCall(dwarves){
  var dwarfRoll = '';
  for(var i = 0; i < dwarves.length; i++){
    dwarfRoll += `${i + 1}. ${dwarves[i]} `;
  } return dwarfRoll;
}




function summonCaptainPlanet(planeteerCalls){
  var hypedPlaneteerCalls = [];
  while(planeteerCalls.length){
    hypedPlaneteerCalls.push(planeteerCalls.shift().toUpperCase()+'!');
  }return hypedPlaneteerCalls;
}









function longPlaneteerCalls(calls){
  for(var i = 0; i < calls.length; i++){
    if(calls[i].length > 4){
      return true;
    }
  } return false;
}


//below changes function to create and return an array of all of the elements that are longer than 4 characters.
function longPlaneteerCalls(calls){
  var greaterThanFour = [];
  for(var i = 0; i < calls.length; i++){
    if(calls[i].length > 4){
      greaterThanFour.push(calls[i]);
    }
  } if(greaterThanFour.length){
    return greaterThanFour;
  } else{
    return false;
  }
}










function findTheCheese(array){
  var compare;
  var cheeses = ['cheddar', 'gouda', 'camembert'];
  for(var i = 0; i < array.length; i++){
    compare = array[i].toLowerCase();
    //above makes sure elements from accepted array are lower case. since we control the cheese list and can enter them lower case, there is no reason to change them.
    for(var c = 0; c < cheeses.length; c++){
      if(compare === cheeses[c]){
        return cheeses[c];
      }
    }
  }return 'no cheese!';
}