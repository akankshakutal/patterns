const { generateDiamond } = require('./src/patternLib.js');
const { extractParameters,convertToString } = require('./src/patternsUtilLib.js');

const main = function() { 
  let parameters = extractParameters(process.argv);
  let diamond = generateDiamond(parameters);
  diamond = convertToString(diamond);
  console.log(diamond);
}

main();


