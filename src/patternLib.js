const {createFilledRect,
  createEmptyRect,
  createAlternateRect,
  createLeftTriangle,
  createRightTriangle,
  createFilledDiamond,
  createHollowDiamond,
  createAngledDiamond } = require('./patternUtil.js');

const generateRectangle = function(parameters) {
  let rectangleType = rectangleTypes[parameters.type];
  let width = parameters.width;
  let height = parameters.height;
  let rectangle = rectangleType(height,width);
  return rectangle;
}

const generateTriangle = function(parameters) {
  let triangleType = triangleTypes[parameters.type];
  let height = parameters.height;
  let triangle = triangleType(height);
  return triangle;
}

const generateDiamond = function (parameters) {
  if(parameters.height%2  == 0) {
    parameters.height --;
  }
  let diamondType = diamondTypes[parameters.type];
  let height = parameters.height;
  let diamond = diamondType(height);
  return diamond;
}

const generatePattern = function(parameters) { 
  let patterns = [];
  for(let index=1; index<parameters.length; index++) {
    let patternType = typesOfPattern[parameters[index]["type"]];
    let line = patternType(parameters[index]);
    patterns.push(line);
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

const diamondTypes = {
  "filled_diamond" : createFilledDiamond,
  "hollow_diamond" : createHollowDiamond,
  "angled_diamond" : createAngledDiamond,
  "filled" : createFilledDiamond,
  "hollow" : createHollowDiamond,
  "angled" : createAngledDiamond
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

exports.generatePattern = generatePattern;
exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
