const { generateRectangle } = require('./src/patternLib.js');
const { extractParameters } = require('./src/patternsUtilLib.js');

const main = function() { 
  let parameters = extractParameters(process.argv);
  let rectangle = generateRectangle(parameters);
  console.log(rectangle);
}

main();
