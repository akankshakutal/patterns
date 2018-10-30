const { generateRectangle } = require('./src/patternLib.js');
const { extractParameters,lineSeperator } = require('./src/patternUtil.js');

const main = function() { 
  let parameters = extractParameters(process.argv.slice(2));
  let rectangle = generateRectangle(parameters);
  rectangle = lineSeperator(rectangle);
  console.log(rectangle);
}

main();
