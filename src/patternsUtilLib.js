const extractParameters = function (userArgs) { 
  parameters = userArgs.slice(2);
  let type = parameters[0];
  let height = +parameters[1];
  let width = +parameters[2];
  return {type : type, height : height, width : width};
}
exports.extractParameters = extractParameters;

const repeatCharacter = function (character,times) {
  let line = "";
  for (let count = 0; count < times; count++) {
    line = line + character;
  }
  return line;
}
exports.repeatCharacter = repeatCharacter;

const rightJustifyLine = function(text, width) {
  let numberOfSpaces = width - text.length;
  let spaces = repeatCharacter(' ', numberOfSpaces);
  return spaces + text;
}
exports.rightJustifyLine = rightJustifyLine;

const centerJustifyLine = function(text, width) {
  let numberOfSpaces = (width - text.length) / 2;
  let spaces = repeatCharacter(' ', numberOfSpaces);
  return spaces + text + spaces;
}
exports.centerJustifyLine = centerJustifyLine;

const leftJustifyLine = function(text, width) {
  let numberOfSpaces = (width - text.length);
  let spaces = repeatCharacter(' ', numberOfSpaces);
  return text + spaces;
}
exports.leftJustifyLine = leftJustifyLine;

const createLine = function(leftChar,middleChar,rightChar,width) { 
  let leftBorderWidth = 1 % (width + 1);
  let rightBorderWidth = 1 % width;
  let line  = repeatCharacter(leftChar, leftBorderWidth);
  line += repeatCharacter(middleChar, width - 2);
  line += repeatCharacter(rightChar, rightBorderWidth);
  return line;
}
exports.createLine = createLine;

const createLineGenerator = function(leftChar, middleChar, rightChar) {
  return function (width) {
    return createLine(leftChar, middleChar, rightChar,width);
  }
}
exports.createLineGenerator = createLineGenerator;

const starLineGenerator = createLineGenerator("*","*","*");
const dashLineGenerator = createLineGenerator("-","-","-");
const hollowLineGenerator = createLineGenerator("*"," ","*");
const upperAngledLineGenerator = createLineGenerator("/"," ","\\");
const lowerAngledLineGenerator = createLineGenerator("\\"," ","/");
exports.starLineGenerator = starLineGenerator;
exports.dashLineGenerator = dashLineGenerator;
exports.hollowLineGenerator = hollowLineGenerator;
exports.upperAngledLineGenerator = upperAngledLineGenerator;
exports.lowerAngledLineGenerator = lowerAngledLineGenerator;

const createFilledRect = function (width,height) {
  let rectangle = new Array(height).fill(starLineGenerator(width));
  return rectangle;
}
exports.createFilledRect = createFilledRect;

const createEmptyRect = function (width,height) {
  let rectangle = [];
  if(width > 0 && height > 0) {
    rectangle.push(starLineGenerator(width));
    for(let row = 1; row < height-1; row++){
      rectangle.push(hollowLineGenerator(width));
    }
    rectangle.push(starLineGenerator(width));
    return rectangle;
  }
  return rectangle;
}
exports.createEmptyRect = createEmptyRect;

const createAlternateRect = function(width,height) {
  let rectangle = [];
  for(let row=0; row<height; row++) {
    let line = starLineGenerator(width)
    if(row%2 != 0) {
      line = dashLineGenerator(width);
    }
    rectangle.push(line);
  }
  return rectangle;
}
exports.createAlternateRect = createAlternateRect;

const createTriangle = function(height,justifier,lineGenerator) {
  let triangle = [];
  for(row=1; row<=height; row++) {
    let line = lineGenerator(row);
    triangle.push(justifier(line,height));
  }
  return triangle;
}
exports.createTriangle = createTriangle;

const createLeftTriangle = function (height) {
  return createTriangle(height,leftJustifyLine,starLineGenerator);
}
exports.createLeftTriangle = createLeftTriangle;

const createRightTriangle = function (height) {
  return createTriangle(height,rightJustifyLine,starLineGenerator);
}
exports.createRightTriangle = createRightTriangle;

const generateUpperPartOfDiamond = function (height,lineGenerator) {
  let upperPart = [];
  for (let rowLength=1; rowLength<height; rowLength+=2) {
    upperPart.push(centerJustifyLine(lineGenerator(rowLength),height));
  }
  return upperPart;
}
exports.generateUpperPartOfDiamond = generateUpperPartOfDiamond;

const generateLowerPartOfDiamond = function(height,lineGenerator) {
  let lowerPart = [];
   for (let rowLength=height; rowLength>=1; rowLength-=2) {
    lowerPart.push(centerJustifyLine(lineGenerator(rowLength),height));
  }
  return lowerPart;
}
exports.generateLowerPartOfDiamond = generateLowerPartOfDiamond;

const createFilledDiamond = function(height) {
  let diamond = [];
  diamond = diamond.concat(generateUpperPartOfDiamond(height,starLineGenerator));
  diamond = diamond.concat(generateLowerPartOfDiamond(height,starLineGenerator));

  return diamond;
}
exports.createFilledDiamond = createFilledDiamond;

const createHollowDiamond = function(height) {
  let diamond = [];
  diamond = diamond.concat(generateUpperPartOfDiamond(height,hollowLineGenerator));
  diamond = diamond.concat(generateLowerPartOfDiamond(height,hollowLineGenerator));
  return diamond;
}
exports.createHollowDiamond = createHollowDiamond;

const generateUpperPartOfAngledDiamond = function (height,lineGenerator) {
  let upperPart = [];
  for (let rowLength=3; rowLength<height-1; rowLength+=2) {
    upperPart.push(centerJustifyLine(lineGenerator(rowLength),height));
  }
  return upperPart;
}
exports.generateUpperPartOfAngledDiamond = generateUpperPartOfAngledDiamond;

const generateLowerPartOfAngledDiamond = function(height,lineGenerator) {
  let lowerPart = [];
   for (let rowLength=height-2; rowLength>1; rowLength-=2) {
    lowerPart.push(centerJustifyLine(lineGenerator(rowLength),height));
  }
  return lowerPart;
}
exports.generateLowerPartOfAngledDiamond = generateLowerPartOfAngledDiamond;


const createAngledDiamond = function(height){
  let diamond = [];
  diamond =  diamond.concat(centerJustifyLine("*",height));
  diamond = diamond.concat(generateUpperPartOfAngledDiamond(height,upperAngledLineGenerator));
  diamond = diamond.concat(hollowLineGenerator(height));
  diamond = diamond.concat(generateLowerPartOfAngledDiamond(height,lowerAngledLineGenerator));
  diamond = diamond.concat(centerJustifyLine("*",height));
  return diamond;
}
exports.createAngledDiamond = createAngledDiamond;
