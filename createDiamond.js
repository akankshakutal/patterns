const { generateDiamond } = require('./src/patternLib.js');
const { extractParameters } = require('./src/patternsUtilLib.js');

const main = function() { 
  let parameters = extractParameters(process.argv);
  let diamond = generateDiamond(parameters);
  console.log(diamond);
}

main();


