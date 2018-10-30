const { generateTriangle } = require('./src/patternLib.js');
const { extractParameters,lineSeperator } = require('./src/patternUtil.js');

const main = function() { 
  let parameters = extractParameters(process.argv.slice(2));
  let triangle = generateTriangle(parameters);
  triangle = lineSeperator(triangle);
  console.log(triangle);
}

main();

