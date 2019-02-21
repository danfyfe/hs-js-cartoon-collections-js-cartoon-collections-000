function dwarfRollCall(dwarves) {
  var dwarfCall = '';
  for (var i = 0; i < dwarves.length; i++){
    dwarfCall += `${i + 1}. ${dwarves[i]} `;
  }
  return dwarfCall;
}

function summonCaptainPlanet(planeteerCalls){
  var hypedPlaneteerCalls = [];
  while (planeteerCalls.length){
    hypedPlaneteerCalls.push(planeteerCalls.shift().toUpperCase() + '!');
  }
  return hypedPlaneteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
 var cheeses = ['cheddar', 'gouda', 'camembert'];
  for (var i = 0; i < foods.length; i++){
    let food = foods[i];
    for (var c = 0; c < cheeses.length; i++){
      if (food === cheeses[c]){
        return cheeses[c];
      }
    }
  } return 'no cheese!';
}
