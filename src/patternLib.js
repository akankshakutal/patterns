const {createFilledRect,
       createEmptyRect,
       createAlternateRect,
       createLeftTriangle,
       createRightTriangle,
       createFilledDiamond,
       createHollowDiamond,
       createAngledDiamond } = require('./patternsUtilLib.js');

const generateRectangle = function(parameters) {
  let rectangle = "";
  if(parameters.type.toLowerCase()  == "filled") {
    rectangle = createFilledRect(parameters.width,parameters.height);
  }
  if(parameters.type.toLowerCase()   == "empty") {
    rectangle = createEmptyRect(parameters.width,parameters.height);
  }
  if(parameters.type.toLowerCase()   == "alternating") {
    rectangle = createAlternateRect(parameters.width,parameters.height);
  }
  return rectangle;
}

const generateTriangle = function(parameters) {
  let triangle  = ""; 
  if(parameters.type.toLowerCase()  == "left") {
    triangle = createLeftTriangle(parameters.height);
  }
  if(parameters.type.toLowerCase()  == "right") {
    triangle = createRightTriangle(parameters.height);
  }
  return triangle;
}

const generateDiamond = function (parameters) {
  let diamond  = ""; 
  if(parameters.height %2 == 0) {
    parameters.height --;
  }
  if(parameters.type.toLowerCase()  == "filled"){
    diamond = createFilledDiamond(parameters.height);
  }
  if(parameters.type.toLowerCase()  == "hollow") {
    diamond = createHollowDiamond(parameters.height);
  }
  if(parameters.type.toLowerCase()  == "angled") {
    diamond=createAngledDiamond(parameters.height);
  }
    return diamond;
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
