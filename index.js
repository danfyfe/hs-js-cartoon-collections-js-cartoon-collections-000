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
  for (var i = 0; i < foods.length; i++){
    if (foods[i] === 'cheddar'){
      return 'cheddar';
    } else if (foods[i] === 'gouda'){
      return 'gouda';
    } else if (foods[i] === 'camembert'){
      return 'camembert';
    }
  } return 'no cheese!'; 
}
