const { generateTriangle } = require('./src/patternLib.js');
const { extractParameters,convertToString } = require('./src/patternsUtilLib.js');

const main = function() { 
  let parameters = extractParameters(process.argv);
  let triangle = generateTriangle(parameters);
  triangle = convertToString(triangle);
  console.log(triangle);
}

main();

