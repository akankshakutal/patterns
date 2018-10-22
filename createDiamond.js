const { generateDiamond } = require('./src/patternLib.js');
const main = function() { 
  let kindOfDiamond = process.argv[2];
  let height = process.argv[3];
  let diamond = generateDiamond(kindOfDiamond,height);
  console.log(diamond);
}

main();

