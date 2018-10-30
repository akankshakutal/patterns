const {createFilledRect,
       createEmptyRect,
       createAlternateRect,
       createLeftTriangle,
       createRightTriangle,
       createFilledDiamond,
       createHollowDiamond,
       createAngledDiamond } = require('./patternUtil.js');

const generateRectangle = function(parameters) {
  const rectangleTypes = { 
    'filled' : createFilledRect,
    'empty' : createEmptyRect,
    'alternating' : createAlternateRect,
  }
  let rectangle = rectangleTypes[parameters.type](parameters.height,parameters.width);
  return rectangle;
}

const generateTriangle = function(parameters) {
  const triangleTypes = {
    "left" : createLeftTriangle,
    "right" : createRightTriangle,
  }
  let triangle = triangleTypes[parameters.type](parameters.height);
  return triangle;
}

const generateDiamond = function (parameters) {
  if(parameters.height%2  == 0) {
    parameters.height --;
  }

  const diamondTypes = {
    "filled" : createFilledDiamond,
    "hollow" : createHollowDiamond,
    "angled" : createAngledDiamond
  }
  let diamond = diamondTypes[parameters.type](parameters.height);
  return diamond;
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
