const { generateTriangle } = require('./src/patternLib.js');
const { extractParameters } = require('./src/patternsUtilLib.js');

const main = function() { 
  let parameters = extractParameters(process.argv);
  let triangle = generateTriangle(parameters);
  console.log(triangle);
}

main();

