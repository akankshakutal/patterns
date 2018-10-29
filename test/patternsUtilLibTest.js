const assert = require("assert");
const { printLog } = require("../testFramework.js");
const { extractParameters,
  repeatCharacter,
  rightJustifyLine,
  leftJustifyLine,
  centerJustifyLine,
  starLineGenerator,
  hollowLineGenerator,
  dashLineGenerator,
  upperAngledLineGenerator,
  lowerAngledLineGenerator,
  createLineGenerator,
  createFilledRect,
  createEmptyRect,
  createAlternateRect,
  createTriangle,
  createLeftTriangle,
  createRightTriangle,
  generateUpperPartOfDiamond,
  generateLowerPartOfDiamond,
  generateUpperPartOfAngledDiamond,
  generateLowerPartOfAngledDiamond,
  createFilledDiamond,
  createHollowDiamond,
  createAngledDiamond } = require('../src/patternsUtilLib.js');

/*------------------ ExtractParameters function tests --------------*/

let actualOutput = extractParameters([,,"Filled",5,6]);
let expectedOutput = {type : "Filled" , height : 5 , width : 6};
assert.deepEqual(actualOutput,expectedOutput);

actualOutput = extractParameters([,,"Empty",9,-3]);
expectedOutput = {type : "Empty" , height : 9 , width : -3};
assert.deepEqual(actualOutput,expectedOutput);

actualOutput = extractParameters([,,"Empty",9,-3]);
expectedOutput = {type : "Empty" , height : 9 , width : -3};
assert.deepEqual(actualOutput,expectedOutput);

/*------------------ RepeateCharacter function tests --------------*/

let inputs = ["*",0];
actualOutput = repeatCharacter("*",0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = ["-",1];
actualOutput = repeatCharacter("-",1);
expectedOutput = "-";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = ["#",5];
actualOutput = repeatCharacter("#",5);
expectedOutput = "#####";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = ["*",2];
actualOutput = repeatCharacter("*",2);
expectedOutput = "**";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ RightJustifyLine function tests --------------*/

inputs = ["Foo",5];
actualOutput = rightJustifyLine("Foo",5);
expectedOutput = "  Foo";
assert.equal(actualOutput,expectedOutput);
printLog(rightJustifyLine,inputs,expectedOutput,actualOutput);

inputs = ["Omkar",0];
actualOutput = rightJustifyLine("Omkar",0);
expectedOutput = "Omkar";
assert.equal(actualOutput,expectedOutput);
printLog(rightJustifyLine,inputs,expectedOutput,actualOutput);

inputs = ["Ok",3];
actualOutput = rightJustifyLine("Ok",3);
expectedOutput = " Ok";
assert.equal(actualOutput,expectedOutput);
printLog(rightJustifyLine,inputs,expectedOutput,actualOutput);

/*------------------ LeftJustifyLine function tests --------------*/

inputs = ["Foo",5];
actualOutput = leftJustifyLine("Foo",5);
expectedOutput = "Foo  ";
assert.equal(actualOutput,expectedOutput);
printLog(leftJustifyLine,inputs,expectedOutput,actualOutput);

inputs = ["Omkar",0];
actualOutput = leftJustifyLine("Omkar",0);
expectedOutput = "Omkar";
assert.equal(actualOutput,expectedOutput);
printLog(leftJustifyLine,inputs,expectedOutput,actualOutput);

inputs = ["Ok",3];
actualOutput = leftJustifyLine("Ok",3);
expectedOutput = "Ok ";
assert.equal(actualOutput,expectedOutput);
printLog(leftJustifyLine,inputs,expectedOutput,actualOutput);

/*------------------ CreateLineGenerator function tests --------------*/

inputs = ["*","*","*"];
actualOutput = createLineGenerator("*","*","*");
actualOutput = actualOutput(5);
expectedOutput = "*****";
assert.deepEqual(actualOutput,expectedOutput);
printLog(createLineGenerator,inputs,expectedOutput,actualOutput);

inputs = ["*","-","*"];
actualOutput = createLineGenerator("*","-","*");
actualOutput = actualOutput(5);
expectedOutput = "*---*";
assert.deepEqual(actualOutput,expectedOutput);
printLog(createLineGenerator,inputs,expectedOutput,actualOutput);

inputs = ["#"," ","#"];
actualOutput = createLineGenerator("#"," ","#");
actualOutput = actualOutput(0);
expectedOutput = "";
assert.deepEqual(actualOutput,expectedOutput);
printLog(createLineGenerator,inputs,expectedOutput,actualOutput);

/*------------------ CreateFilledRect function tests --------------*/

inputs = [0,0];
actualOutput = createFilledRect(0,0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(createFilledRect,inputs,expectedOutput,actualOutput);

inputs = [1,1];
actualOutput = createFilledRect(1,1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(createFilledRect,inputs,expectedOutput,actualOutput);

inputs = [2,2];
actualOutput = createFilledRect(2,2);
expectedOutput  = "**\n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(createFilledRect,inputs,expectedOutput,actualOutput);

inputs = [5,5];
actualOutput = createFilledRect(5,5);
expectedOutput  = "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(createFilledRect,inputs,expectedOutput,actualOutput);

/*------------------ createEmptyRect function tests --------------*/

inputs = [0,0];
actualOutput = createEmptyRect(0,0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(createEmptyRect,inputs,expectedOutput,actualOutput);

inputs[1,1];
actualOutput = createEmptyRect(1,1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(createEmptyRect,inputs,expectedOutput,actualOutput);

inputs = [2,2];
actualOutput = createEmptyRect(2,2);
expectedOutput  = "**\n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(createEmptyRect,inputs,expectedOutput,actualOutput);

inputs = [5,5];
actualOutput = createEmptyRect(5,5);
expectedOutput  = "*****\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(createEmptyRect,inputs,expectedOutput,actualOutput);

/*------------------ createAlternateRect function tests --------------*/

inputs = [0,0];
actualOutput = createAlternateRect(0,0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(createAlternateRect,inputs,expectedOutput,actualOutput);

inputs = [1,1];
actualOutput = createAlternateRect(1,1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(createAlternateRect,inputs,expectedOutput,actualOutput);

inputs = [2,2];
actualOutput = createAlternateRect(2,2);
expectedOutput  = "**\n"
expectedOutput += "--";
assert.equal(actualOutput,expectedOutput);
printLog(createAlternateRect,inputs,expectedOutput,actualOutput);

inputs = [5,5];
actualOutput = createAlternateRect(5,5);
expectedOutput  = "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(createAlternateRect,inputs,expectedOutput,actualOutput);

/*------------------ CreateTriangle function tests --------------*/

inputs = [0];
actualOutput = createTriangle(0,rightJustifyLine,starLineGenerator);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(createTriangle,inputs,expectedOutput,actualOutput);

inputs = [1];
actualOutput = createTriangle(1,leftJustifyLine,dashLineGenerator);
expectedOutput = "-";
assert.equal(actualOutput,expectedOutput);
printLog(createTriangle,inputs,expectedOutput,actualOutput);

inputs [2];
actualOutput = createTriangle(2,leftJustifyLine,dashLineGenerator);
expectedOutput  = "- \n"
expectedOutput += "--";
assert.equal(actualOutput,expectedOutput);
printLog(createTriangle,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createTriangle(5,leftJustifyLine,starLineGenerator);
expectedOutput  = "*    \n";
expectedOutput += "**   \n";
expectedOutput += "***  \n";
expectedOutput += "**** \n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(createLeftTriangle,inputs,expectedOutput,actualOutput);

/*------------------ CreateLeftTriangle function tests --------------*/

inputs = [0];
actualOutput = createLeftTriangle(0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(createLeftTriangle,inputs,expectedOutput,actualOutput);

inputs = [1];
actualOutput = createLeftTriangle(1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(createLeftTriangle,inputs,expectedOutput,actualOutput);

inputs [2];
actualOutput = createLeftTriangle(2);
expectedOutput  = "* \n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(createLeftTriangle,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createLeftTriangle(5);
expectedOutput  = "*    \n";
expectedOutput += "**   \n";
expectedOutput += "***  \n";
expectedOutput += "**** \n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(createLeftTriangle,inputs,expectedOutput,actualOutput);

/*------------------ CreateRightTriangle function tests --------------*/

inputs = [0];
actualOutput = createRightTriangle(0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(createRightTriangle,inputs,expectedOutput,actualOutput);

inputs = [1];
actualOutput = createRightTriangle(1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(createRightTriangle,inputs,expectedOutput,actualOutput);

inputs = [2];
actualOutput = createRightTriangle(2);
expectedOutput  = " *\n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(createRightTriangle,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createRightTriangle(5);
expectedOutput  = "    *\n";
expectedOutput += "   **\n";
expectedOutput += "  ***\n";
expectedOutput += " ****\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(createRightTriangle,inputs,expectedOutput,actualOutput);

/*------------------ generateUpperPartOfDiamond function tests --------------*/

inputs = [5,starLineGenerator];
actualOutput = generateUpperPartOfDiamond(5,starLineGenerator);
expectedOutput  = "  *  \n";
expectedOutput += " *** ";
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateUpperPartOfDiamond,inputs,expectedOutput,actualOutput);

inputs = [7,starLineGenerator];
actualOutput = generateUpperPartOfDiamond(7,starLineGenerator);
expectedOutput  = "   *   \n";
expectedOutput += "  ***  \n";
expectedOutput += " ***** "
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateUpperPartOfDiamond,inputs,expectedOutput,actualOutput);

/*------------------ generateLowerPartOfDiamond function tests --------------*/

inputs = [5,starLineGenerator];
actualOutput = generateLowerPartOfDiamond(5,starLineGenerator);
expectedOutput  = "*****\n";
expectedOutput += " *** \n";
expectedOutput += "  *  ";
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateLowerPartOfDiamond,inputs,expectedOutput,actualOutput);

inputs = [7,starLineGenerator];
actualOutput = generateLowerPartOfDiamond(7,starLineGenerator);
expectedOutput  = "*******\n";
expectedOutput += " ***** \n";
expectedOutput += "  ***  \n";
expectedOutput += "   *   "
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateLowerPartOfDiamond,inputs,expectedOutput,actualOutput);

/*------------------ CreateFilledDiamond function tests --------------*/

inputs = [3];
actualOutput = createFilledDiamond(3);
expectedOutput  = " * \n";
expectedOutput += "***\n";
expectedOutput += " * ";
assert.equal(actualOutput,expectedOutput);
printLog(createFilledDiamond,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createFilledDiamond(5);
expectedOutput  = "  *  \n";
expectedOutput += " *** \n";
expectedOutput += "*****\n"
expectedOutput += " *** \n";
expectedOutput += "  *  ";
assert.equal(actualOutput,expectedOutput);
printLog(createFilledDiamond,inputs,expectedOutput,actualOutput);

/*------------------ CreateHollowDiamond function tests --------------*/
inputs = [3];
actualOutput = createHollowDiamond(3);
expectedOutput  = " * \n";
expectedOutput += "* *\n";
expectedOutput += " * ";
assert.equal(actualOutput,expectedOutput);
printLog(createHollowDiamond,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createHollowDiamond(5);
expectedOutput  = "  *  \n";
expectedOutput += " * * \n";
expectedOutput += "*   *\n"
expectedOutput += " * * \n";
expectedOutput += "  *  ";
assert.equal(actualOutput,expectedOutput);
printLog(createHollowDiamond,inputs,expectedOutput,actualOutput);

/*------------------ generateUpperPartOfAngledDiamond function tests --------------*/

inputs = [5,upperAngledLineGenerator];
actualOutput = generateUpperPartOfAngledDiamond(5,upperAngledLineGenerator);
expectedOutput = " / \\ ";
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateUpperPartOfAngledDiamond,inputs,expectedOutput,actualOutput);

inputs = [7,upperAngledLineGenerator];
actualOutput = generateUpperPartOfAngledDiamond(7,upperAngledLineGenerator);
expectedOutput  = "  / \\  \n";
expectedOutput += " /   \\ "
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateUpperPartOfAngledDiamond,inputs,expectedOutput,actualOutput);

/*------------------ generateLowerPartOfDiamond function tests --------------*/

inputs = [5,lowerAngledLineGenerator];
actualOutput = generateLowerPartOfAngledDiamond(5,lowerAngledLineGenerator);
expectedOutput = " \\ / ";
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateLowerPartOfAngledDiamond,inputs,expectedOutput,actualOutput);

inputs = [7,lowerAngledLineGenerator];
actualOutput = generateLowerPartOfAngledDiamond(7,lowerAngledLineGenerator);
expectedOutput  = " \\   / \n";
expectedOutput += "  \\ /  ";
assert.deepEqual(actualOutput,expectedOutput);
printLog(generateLowerPartOfAngledDiamond,inputs,expectedOutput,actualOutput);

/*------------------ CreateAngledDiamond function tests --------------*/
inputs = [5];
actualOutput = createAngledDiamond(5);
expectedOutput  = "  *  \n";
expectedOutput += " / \\ \n";
expectedOutput += "*   *\n"
expectedOutput += " \\ / \n";
expectedOutput += "  *  ";
assert.equal(actualOutput,expectedOutput);
printLog(createAngledDiamond,inputs,expectedOutput,actualOutput);

inputs = [7];
actualOutput = createAngledDiamond(7);
expectedOutput  = "   *   \n";
expectedOutput += "  / \\  \n";
expectedOutput += " /   \\ \n"
expectedOutput += "*     *\n"
expectedOutput += " \\   / \n";
expectedOutput += "  \\ /  \n";
expectedOutput += "   *   ";
assert.equal(actualOutput,expectedOutput);
printLog(createAngledDiamond,inputs,expectedOutput,actualOutput);

