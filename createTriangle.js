const { generateTriangle } = require('./src/patternLib.js');

const main = function() {
  let triangleAlignment = process.argv[2];
  let height = process.argv[3];
  let triangle = generateTriangle(triangleAlignment,height);
  console.log(triangle)
}

main();
