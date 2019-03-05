function dwarfRollCall(dwarves){
  var dwarf = '';
  for(var i = 0; i < dwarves.length; i++){
    dwarf += `${i + 1}. ${dwarves[i]} `;
  } return dwarf;
}


function summonCaptainPlanet(planeteerCalls){
  var hypedPlaneteerCalls = [];
  while(planeteerCalls.length > 0){
    hypedPlaneteerCalls.push((planeteerCalls.shift()).toUpperCase()+'!');
  } return hypedPlaneteerCalls;
}

function longPlaneteerCalls(calls){
  for(var i = 0; i < calls.length; i++){
    if (calls[i].length > 4){
      return true;
    }
  } return false;
}

function findTheCheese(array){
  var cheeses = ['cheddar', 'gouda', 'camembert'];
  for (var i = 0; i < array.length; i++){
    var compare = array[i];
    for(var c = 0; c < cheeses.length; c++){
      if(compare === cheeses[c]){
        return cheeses[c];
      }
    }
  } return 'no cheese!';
}