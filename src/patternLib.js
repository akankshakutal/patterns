const {createFilledRect,
  createEmptyRect,
  createAlternateRect,
  createLeftTriangle,
  createRightTriangle,
  createFilledDiamond,
  createHollowDiamond,
  createAngledDiamond } = require('./patternUtil.js');

const generateRectangle = function(parameters) {
  let rectangle = rectangleTypes[parameters.type](parameters.height,parameters.width);
  return rectangle;
}

const generateTriangle = function(parameters) {
  let triangle = triangleTypes[parameters.type](parameters.height);
  return triangle;
}

const diamondTypes = {
  "filled_diamond" : createFilledDiamond,
  "hollow_diamond" : createHollowDiamond,
  "angled_diamond" : createAngledDiamond,
  "filled" : createFilledDiamond,
  "hollow" : createHollowDiamond,
  "angled" : createAngledDiamond
}

const generateDiamond = function (parameters) {
  if(parameters.height%2  == 0) {
    parameters.height --;
  }
  let diamond = diamondTypes[parameters.type](parameters.height);
  return diamond;
}

const typesOfPattern = {
  "filled_rectangle" : generateRectangle,
  "empty_rectangle" : generateRectangle,
  "alternating_rectangle" : generateRectangle,
  "left_triangle" : generateTriangle,
  "right_triangle" : generateTriangle,
  "filled_diamond" : generateDiamond,
  "hollow_diamond" : generateDiamond,
  "angled_diamond" : generateDiamond
};

const generatePattern = function(parameters) { 
  let patterns = [];
  for(let index=1; index<parameters.length; index++) {
    patterns.push( typesOfPattern[parameters[index]["type"]](parameters[index]) );
  }
  return patterns[0];
}

const rectangleTypes = { 
  'filled_rectangle' : createFilledRect,
  'empty_rectangle' : createEmptyRect,
  'alternating_rectangle' : createAlternateRect,
  'filled' : createFilledRect,
  'empty' : createEmptyRect,
  'alternating' : createAlternateRect,
}

const triangleTypes = {
  "left_triangle" : createLeftTriangle,
  "right_triangle" : createRightTriangle,
  "left" : createLeftTriangle,
  "right" : createRightTriangle,
}


exports.generatePattern = generatePattern;
exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
