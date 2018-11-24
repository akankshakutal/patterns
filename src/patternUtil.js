const repeat = function (character,times) {
  let repeatedCharacter = "";
  for (let count = 0; count < times; count++) {
    repeatedCharacter = repeatedCharacter + character;
  }
  return repeatedCharacter;
}

const rightJustifyLine = function(text, width) {
  let numberOfSpaces = width - text.length;
  let spaces = repeat(' ', numberOfSpaces);
  return spaces + text;
}

const centerJustifyLine = function(text, width) {
  let numberOfSpaces = (width - text.length) / 2;
  let spaces = repeat(' ', numberOfSpaces);
  return spaces + text + spaces;
}

const leftJustifyLine = function(text, width) {
  let numberOfSpaces = width - text.length;
  let spaces = repeat(' ', numberOfSpaces);
  return text + spaces;
}

const createLine = function(leftChar,middleChar,rightChar,width) { 
  let leftBorderWidth = 1 % (width + 1);
  let rightBorderWidth = 1 % width;
  let line  = repeat(leftChar, leftBorderWidth);
  line += repeat(middleChar, width - 2);
  line += repeat(rightChar, rightBorderWidth);
  return line;
}

const createLineGenerator = function(leftChar, middleChar, rightChar) {
  return function (width) {
    return createLine(leftChar, middleChar, rightChar,width);
  }
}

const starLineGenerator = createLineGenerator("*","*","*");
const dashLineGenerator = createLineGenerator("-","-","-");
const hollowLineGenerator = createLineGenerator("*"," ","*");
const upperAngledLineGenerator = createLineGenerator("/"," ","\\");
const lowerAngledLineGenerator = createLineGenerator("\\"," ","/");

const isZero = function(width,height) {
  return width == 0 || height == 0;
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

const createTriangle = function(height,justifier,lineGenerator) {
  let triangle = [];
  for(row=1; row<=height; row++) {
    let line = lineGenerator(row);
    triangle.push(justifier(line,height));
  }
  return triangle;
}

const createLeftTriangle = function (height) {
  return createTriangle(height,leftJustifyLine,starLineGenerator);
}

const createRightTriangle = function (height) {
  return createTriangle(height,rightJustifyLine,starLineGenerator);
}

const generateUpperPartOfDiamond = function (tipChar,height,lineGenerator) {
  let upperPart = [];
  upperPart.push(centerJustifyLine(tipChar,height));
  for (let rowLength=3; rowLength<height-1; rowLength+=2) {
    let line = lineGenerator(rowLength);
    let centerJustifidLine = centerJustifyLine(line,height);
    upperPart.push(centerJustifidLine);
  }
  return upperPart;
}

const generateLowerPartOfDiamond = function(tipChar,height,lineGenerator) {
  let lowerPart = [];
  for (let rowLength=height-2; rowLength>1; rowLength-=2) {
    let line = lineGenerator(rowLength);
    let centerJustifidLine = centerJustifyLine(line,height);
    lowerPart.push(centerJustifidLine);
  }
  lowerPart.push(centerJustifyLine(tipChar,height));
  return lowerPart;
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

exports.generateFlipedPattern = generateFlipedPattern;
exports.generateMirrorPattern = generateMirrorPattern;
exports.createAngledDiamond = createAngledDiamond;
exports.repeat = repeat;
exports.createHollowDiamond = createHollowDiamond;
exports.createFilledDiamond = createFilledDiamond;
exports.generateLowerPartOfDiamond = generateLowerPartOfDiamond;
exports.generateUpperPartOfDiamond = generateUpperPartOfDiamond;
exports.createRightTriangle = createRightTriangle;
exports.createLeftTriangle = createLeftTriangle;
exports.createTriangle = createTriangle;
exports.createEmptyRect = createEmptyRect;
exports.createAlternateRect = createAlternateRect;
exports.createLineGenerator = createLineGenerator;
exports.rightJustifyLine = rightJustifyLine;
exports.centerJustifyLine = centerJustifyLine;
exports.leftJustifyLine = leftJustifyLine;
exports.createLine = createLine;
exports.starLineGenerator = starLineGenerator;
exports.dashLineGenerator = dashLineGenerator;
exports.hollowLineGenerator = hollowLineGenerator;
exports.upperAngledLineGenerator = upperAngledLineGenerator;
exports.lowerAngledLineGenerator = lowerAngledLineGenerator;
