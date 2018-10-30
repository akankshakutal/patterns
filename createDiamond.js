const { generateDiamond } = require('./src/patternLib.js');
const { extractParameters,lineSeperator } = require('./src/patternUtil.js');

const main = function() { 
  let parameters = extractParameters(process.argv.slice(2));
  let diamond = generateDiamond(parameters);
  diamond = lineSeperator(diamond);
  console.log(diamond);
}

main();


