const assert = require("assert");
const { printLog } = require("../testFramework.js");
const { repeatCharacter,
  createFilledRect,
  createEmptyRect,
  createAlternateRect,
  createLeftTriangle,
  createRightTriangle,
  upperPartOfFilled,
  upperPartOfHollow,
  upperPartOfAngled,
  createFilledDiamond,
  createHollowDiamond,
  createAngledDiamond } = require('../src/patternsUtilLib.js');

/*------------------ RepeateCharacter function tests --------------*/

let inputs = ["*",0];
let actualOutput = repeatCharacter("*",0);
let expectedOutput = "";
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

/*------------------ createFilledRect function tests --------------*/

inputs = [0,0];
actualOutput = createFilledRect(0,0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(createFilledRect,inputs,expectedOutput,actualOutput);

inputs = [1,1];
actualOutput = createFilledRect(1,1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [2,2];
actualOutput = createFilledRect(2,2);
expectedOutput  = "**\n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5,5];
actualOutput = createFilledRect(5,5);
expectedOutput  = "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ createEmptyRect function tests --------------*/

inputs = [0,0];
actualOutput = createEmptyRect(0,0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs[1,1];
actualOutput = createEmptyRect(1,1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [2,2];
actualOutput = createEmptyRect(2,2);
expectedOutput  = "**\n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5,5];
actualOutput = createEmptyRect(5,5);
expectedOutput  = "*****\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ createAlternateRect function tests --------------*/

inputs = [0,0];
actualOutput = createAlternateRect(0,0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [1,1];
actualOutput = createAlternateRect(1,1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [2,2];
actualOutput = createAlternateRect(2,2);
expectedOutput  = "**\n"
expectedOutput += "--";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5,5];
actualOutput = createAlternateRect(5,5);
expectedOutput  = "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ CreateLeftTriangle function tests --------------*/

inputs = [0];
actualOutput = createLeftTriangle(0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [1];
actualOutput = createLeftTriangle(1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs [2];
actualOutput = createLeftTriangle(2);
expectedOutput  = "*\n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createLeftTriangle(5);
expectedOutput  = "*\n";
expectedOutput += "**\n";
expectedOutput += "***\n";
expectedOutput += "****\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ CreateRightTriangle function tests --------------*/

inputs = [0];
actualOutput = createRightTriangle(0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [1];
actualOutput = createRightTriangle(1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [2];
actualOutput = createRightTriangle(2);
expectedOutput  = " *\n"
expectedOutput += "**";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createRightTriangle(5);
expectedOutput  = "    *\n";
expectedOutput += "   **\n";
expectedOutput += "  ***\n";
expectedOutput += " ****\n";
expectedOutput += "*****";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ CreateFilledDiamond function tests --------------*/

inputs = [0];
actualOutput = createFilledDiamond(0);
expectedOutput = "";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [1];
actualOutput = createFilledDiamond(1);
expectedOutput = "*";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [3];
actualOutput = createFilledDiamond(3);
expectedOutput  = " *\n";
expectedOutput += "***\n";
expectedOutput += " *";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createFilledDiamond(5);
expectedOutput  = "  *\n";
expectedOutput += " ***\n";
expectedOutput += "*****\n"
expectedOutput += " ***\n";
expectedOutput += "  *";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ CreateHollowDiamond function tests --------------*/

inputs = [3];
actualOutput = createHollowDiamond(3);
expectedOutput  = " *\n";
expectedOutput += "* *\n";
expectedOutput += " *";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createHollowDiamond(5);
expectedOutput  = "  *\n";
expectedOutput += " * *\n";
expectedOutput += "*   *\n"
expectedOutput += " * *\n";
expectedOutput += "  *";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

/*------------------ CreateAngledDiamond function tests --------------*/

inputs = [3];
actualOutput = createAngledDiamond(3);
expectedOutput  = " *\n";
expectedOutput += "* *\n";
expectedOutput += " *";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

inputs = [5];
actualOutput = createAngledDiamond(5);
expectedOutput  = "  *\n";
expectedOutput += " / \\\n";
expectedOutput += "*   *\n"
expectedOutput += " \\ /\n";
expectedOutput += "  *";
assert.equal(actualOutput,expectedOutput);
printLog(repeatCharacter,inputs,expectedOutput,actualOutput);

