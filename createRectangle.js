const { generateRectangle } = require('./src/patternLib.js');

const main = function() { 
  let kindOfRectangle = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle = generateRectangle(kindOfRectangle,width,height);
  console.log(rectangle);
}

main();
