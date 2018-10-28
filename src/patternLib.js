const {createFilledRect,
       createEmptyRect,
       createAlternateRect,
       createLeftTriangle,
       createRightTriangle,
       createFilledDiamond,
       createHollowDiamond,
       createAngledDiamond } = require('./patternsUtilLib.js');

const generateRectangle = function(kindOfRectangle,width,height) {
  let rectangle = "";
  if(kindOfRectangle.toLowerCase()  == "filled") {
    rectangle = createFilledRect(width,height);
  }
  if(kindOfRectangle.toLowerCase()  == "empty") {
    rectangle = createEmptyRect(width,height);
  }
  if(kindOfRectangle.toLowerCase()  == "alternating") {
    rectangle = createAlternateRect(width,height);
  }
  return rectangle;
}

const generateTriangle = function(triangleAlignment,height) {
  let triangle  = ""; 
  if(triangleAlignment.toLowerCase() == "left") {
    triangle = createLeftTriangle(height);
  }
  if(triangleAlignment.toLowerCase() == "right") {
    triangle = createRightTriangle(height);
  }
  return triangle;
}

const generateDiamond = function (kindOfDiamond,height) {
  let diamond  = ""; 
  if(height %2 == 0) {
    height--
  }
  if(kindOfDiamond.toLowerCase() == "filled"){
    diamond = createFilledDiamond(height);
  }
  if(kindOfDiamond.toLowerCase() == "hollow") {
    diamond = createHollowDiamond(height);
  }
  if(kindOfDiamond.toLowerCase() == "angled") {
    diamond=createAngledDiamond(height);
  }
    return diamond;
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
