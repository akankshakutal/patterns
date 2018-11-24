const lib = require('./src/patternLib.js');
const {extractMultipleParameter,lineSeperator} = require('./parser.js');

const main = function() { 
  let parameters = extractMultipleParameter(process.argv.slice(2));
  let RequiredPattern = lib.generatePattern(parameters);
  console.log(lineSeperator(RequiredPattern));
}
main();
