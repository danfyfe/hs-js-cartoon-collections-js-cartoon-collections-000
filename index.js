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

function longPlaneteerCalls(calls) {
  for (var i = 0; i < calls.length; i++){
    if (calls[i].length > 4){
      return true;
    } 
   } return false;
}

function findTheCheese (foods) {
  var cheeses = ['cheddar','gouda','camembert','swiss'];
  for (var i = 0; i < foods.length; i++){
    let food = foods[i];
    for (var c = 0; c < cheeses.length; c++){
      if(food === cheeses[c]) {
      return cheeses[c];
    }
  } 
 } return 'no cheese!';
}

function wordsThatStartWithB(words){
  var bWords = [];
  for(var i = 0; i < words.length; i++){
    if (words[i][0] === 'b'){
      bWords.push(words[i]);
    }
  } return bWords;
}

wordsThatStartWithB(['apple', 'banana', 'cheddar']) // ['banana']
wordsThatStartWithB(['brian', 'bobby', 'chad']) // ['brian', 'bobby']
wordsThatStartWithB(['chad', 'cher', 'chase']) // []


/*{
  for (var i = 0; i < foods.length; i++){
    if (foods[i] === 'cheddar'){
      return 'cheddar';
    } else if (foods[i] === 'gouda'){
      return 'gouda';
    } else if (foods[i] === 'camembert'){
      return 'camembert';
    }
  } return 'no cheese!'; 
}*/
