const { starLineGenerator,
  hollowLineGenerator,
  dashLineGenerator,
  upperAngledLineGenerator,
  lowerAngledLineGenerator,
  leftJustifyLine,
  rightJustifyLine,
  centerJustifyLine,
  isZero,
  createTriangle,
  generateUpperPartOfDiamond,
  generateLowerPartOfDiamond  } = require('./patternUtil.js');

const zipArrays = function(dataSet1,dataSet2) {
  let length = Math.max(dataSet1.length,dataSet2.length);
  let result = [];
  for(let index=0; index<length; index++) {
    result[index] = [dataSet1[index],dataSet2[index]];
  }
  return result;
}

const createFilledRect = function (width,height) {
  let rectangle = new Array(height).fill(starLineGenerator(width));
  return rectangle;
}

const createEmptyRect = function (width,height) {
  let rectangle = [];
  if( isZero(width,height) ) {
    return rectangle;
  }
  rectangle.push(starLineGenerator(width));
  for(let row = 1; row < height-1; row++) {
    rectangle.push(hollowLineGenerator(width));
  }
  rectangle.push(starLineGenerator(width));
  return rectangle;
}

const createAlternateRect = function(width,height) {
  let rectangle = [];
  let lineGenerators = [starLineGenerator,dashLineGenerator];
  for(let row=0; row<height; row++) {
    rectangle.push(lineGenerators[row%2](width));
  }
  return rectangle;
}

const createLeftTriangle = function (height) {
  return createTriangle(height,leftJustifyLine,starLineGenerator);
}

const createRightTriangle = function (height) {
  return createTriangle(height,rightJustifyLine,starLineGenerator);
}

const createFilledDiamond = function(height) {
  let diamond = [];
  diamond = diamond.concat(generateUpperPartOfDiamond("*",height,starLineGenerator));
  diamond = diamond.concat(starLineGenerator(height));
  diamond = diamond.concat(generateLowerPartOfDiamond("*",height,starLineGenerator));
  return diamond;
}

const createHollowDiamond = function(height) {
  let diamond = [];
  diamond = diamond.concat(generateUpperPartOfDiamond("*",height,hollowLineGenerator));
  diamond = diamond.concat(hollowLineGenerator(height));
  diamond = diamond.concat(generateLowerPartOfDiamond("*",height,hollowLineGenerator));
  return diamond;
}

const createAngledDiamond = function(height){
  let diamond = [];
  diamond = diamond.concat(generateUpperPartOfDiamond("*",height,upperAngledLineGenerator));
  diamond = diamond.concat(hollowLineGenerator(height));
  diamond = diamond.concat(generateLowerPartOfDiamond("*",height,lowerAngledLineGenerator));
  return diamond;
}

const generateMirrorPattern= function (source) {
  return source.slice().reverse();
}

const generateFlipedPattern = function (source) {
  let result = [];
  for (let element of source) {
    element = element.split("").reverse().join("");
    result.push(element);
  }
  return result;
}

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
  let requiredPattern = [];
  let printMode = parameters[0];
  for(let index=1; index<parameters.length; index++) {
    let patternType = typesOfPattern[parameters[index]["type"]];
    let generatedPattern = patternType(parameters[index]);
    requiredPattern = generatedPattern;
    if(printMode == "flip") {
      requiredPattern = generateFlipedPattern(generatedPattern);
    }
    if(printMode == "mirror") {
      requiredPattern = generateMirrorPattern(generatedPattern);
    }
    patterns.push(requiredPattern);
  }
  let mergedPattern = [];
  patterns = patterns.reduce(zipArrays);
  if (parameters.length == 2) {
    return patterns;
  }
  for (let line of patterns) {
    line = line.join(" ");
    mergedPattern.push(line);
  }
  return mergedPattern;
}

const rectangleTypes = { 
  'filled_rectangle' : createFilledRect,
  'empty_rectangle' : createEmptyRect,
  'alternating_rectangle' : createAlternateRect,
  'filled' : createFilledRect,
  'empty' : createEmptyRect,
  'alternating' : createAlternateRect,
};

const triangleTypes = {
  "left_triangle" : createLeftTriangle,
  "right_triangle" : createRightTriangle,
  "left" : createLeftTriangle,
  "right" : createRightTriangle,
};

const diamondTypes = {
  "filled_diamond" : createFilledDiamond,
  "hollow_diamond" : createHollowDiamond,
  "angled_diamond" : createAngledDiamond,
  "filled" : createFilledDiamond,
  "hollow" : createHollowDiamond,
  "angled" : createAngledDiamond
};

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

exports.zipArrays = zipArrays;
exports.generatePattern = generatePattern;
exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
exports.createFilledRect = createFilledRect;
exports.createEmptyRect = createEmptyRect;
exports.createAlternateRect= createAlternateRect;
exports.createLeftTriangle= createLeftTriangle;
exports.createRightTriangle= createRightTriangle;
exports.createFilledDiamond= createFilledDiamond;
exports.createHollowDiamond= createHollowDiamond;
exports.createAngledDiamond= createAngledDiamond;
exports.generateMirrorPattern = generateMirrorPattern;
exports.generateFlipedPattern = generateFlipedPattern;
