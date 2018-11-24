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

const createTriangle = function(height,justifier,lineGenerator) {
  let triangle = [];
  for(row=1; row<=height; row++) {
    let line = lineGenerator(row);
    triangle.push(justifier(line,height));
  }
  return triangle;
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

exports.repeat = repeat;
exports.isZero = isZero;
exports.generateLowerPartOfDiamond = generateLowerPartOfDiamond;
exports.generateUpperPartOfDiamond = generateUpperPartOfDiamond;
exports.createTriangle = createTriangle;
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
