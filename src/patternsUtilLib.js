const extractParameters = function (userArgs) { 
  let type = userArgs[2];
  let height = +userArgs[3];
  let width = +userArgs[4];
  return {type : type, height : height, width : width};
}
exports.extractParameters = extractParameters;

const repeatCharacter = function (character,times) {
  let line = '';
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
  let line = [];
  line[0] = repeatCharacter(leftChar, leftBorderWidth);
  line[1] = repeatCharacter(middleChar, width - 2);
  line[2] = repeatCharacter(rightChar, rightBorderWidth);
  return line.join("");
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
  return rectangle.join("\n");
}
exports.createFilledRect = createFilledRect;

const createEmptyRect = function (width,height) {
  let rectangle = [];
  rectangle[0] = starLineGenerator(width);
  for(let row = 1; row < height-1; row++){
    rectangle[row] = hollowLineGenerator(width);
  }
  rectangle[height-1] = starLineGenerator(width);
  return rectangle.join("\n");
}
exports.createEmptyRect = createEmptyRect;

const createAlternateRect = function(width,height) {
  let rectangle = [];
  for(let row=0; row<height; row++) {
    rectangle[row] = starLineGenerator(width);
    if(row % 2 != 0) {
      rectangle[row] = dashLineGenerator(width);
    }
  }
  return rectangle.join("\n");
}
exports.createAlternateRect = createAlternateRect;

const createTriangle = function(height,justifier,lineGenerator) {
  let triangle = [];
  for(row=0; row<height; row++) {
    triangle[row] = lineGenerator(row+1);
    let line = triangle[row];
    triangle[row] = justifier(line,height);
  }
  return triangle.join("\n");
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
  return upperPart.join("\n");
}
exports.generateUpperPartOfDiamond = generateUpperPartOfDiamond;

const generateLowerPartOfDiamond = function(height,lineGenerator) {
  let lowerPart = [];
   for (let rowLength=height; rowLength>=1; rowLength-=2) {
    lowerPart.push(centerJustifyLine(lineGenerator(rowLength),height));
  }
  return lowerPart.join("\n");
}
exports.generateLowerPartOfDiamond = generateLowerPartOfDiamond;

const createFilledDiamond = function(height) {
  let diamond = [];
  diamond[0] = generateUpperPartOfDiamond(height,starLineGenerator);
  diamond[0] = diamond[0] + "\n" + generateLowerPartOfDiamond(height,starLineGenerator);
  return diamond.join("\n");
}
exports.createFilledDiamond = createFilledDiamond;

const createHollowDiamond = function(height) {
  let diamond = [];
  diamond[0] = generateUpperPartOfDiamond(height,hollowLineGenerator);
  diamond[0] = diamond[0] + "\n" + generateLowerPartOfDiamond(height,hollowLineGenerator);
  return diamond.join("\n");
}
exports.createHollowDiamond = createHollowDiamond;

const generateUpperPartOfAngledDiamond = function (height,lineGenerator) {
  let upperPart = [];
  for (let rowLength=3; rowLength<height-1; rowLength+=2) {
    upperPart.push(centerJustifyLine(lineGenerator(rowLength),height));
  }
  return upperPart.join("\n");
}
exports.generateUpperPartOfAngledDiamond = generateUpperPartOfAngledDiamond;

const generateLowerPartOfAngledDiamond = function(height,lineGenerator) {
  let lowerPart = [];
   for (let rowLength=height-2; rowLength>1; rowLength-=2) {
    lowerPart.push(centerJustifyLine(lineGenerator(rowLength),height));
  }
  return lowerPart.join("\n");
}
exports.generateLowerPartOfAngledDiamond = generateLowerPartOfAngledDiamond;

const createAngledDiamond = function(height){
  let diamond = [];
  diamond[0] = centerJustifyLine("*",height);
  diamond[0] = diamond[0] + "\n" + generateUpperPartOfAngledDiamond(height,upperAngledLineGenerator);
  diamond[0] = diamond[0] + "\n" + hollowLineGenerator(height);
  diamond[0] = diamond[0] + "\n" + generateLowerPartOfAngledDiamond(height,lowerAngledLineGenerator);
  diamond[0] = diamond[0] + "\n" + centerJustifyLine("*",height);
  return diamond.join("\n");
}
exports.createAngledDiamond = createAngledDiamond;
