const { generateRectangle } = require('./src/patternLib.js');
const { extractParameters,convertToString } = require('./src/patternsUtilLib.js');

const main = function() { 
  let parameters = extractParameters(process.argv);
  let rectangle = generateRectangle(parameters);
  rectangle = convertToString(rectangle);
  console.log(rectangle);
}

main();
