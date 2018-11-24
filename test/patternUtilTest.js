const assert = require("assert");
const { printLog } = require("../testFramework.js");
const { extractParameters } = require("../parser.js");
const { repeat,
  rightJustifyLine,
  leftJustifyLine,
  centerJustifyLine,
  starLineGenerator,
  createLineGenerator,
  hollowLineGenerator,
  dashLineGenerator,
  upperAngledLineGenerator,
  lowerAngledLineGenerator,
  createTriangle,
  generateUpperPartOfDiamond,
  generateLowerPartOfDiamond } = require('../src/patternUtil.js');

/*------------------ Test ExtractParameters function --------------*/

const testExtractParameters = function(inputs,expectedOutput) { 
  let actualOutput = extractParameters(inputs);
  assert.deepEqual(actualOutput,expectedOutput);
}

let inputs,expectedOutput;

inputs = ["Filled",5,6];
expectedOutput = {type : "Filled" , height : 5 , width : 6};
testExtractParameters(inputs,expectedOutput);

inputs = ["Empty",9,-3];
expectedOutput = {type : "Empty" , height : 9 , width : -3};
testExtractParameters(inputs,expectedOutput);

inputs = ["Empty",9,-3];
expectedOutput = {type : "Empty" , height : 9 , width : -3};
testExtractParameters(inputs,expectedOutput);

/*------------------ Test RepeatCharacter function --------------*/

const test = function(functionName,inputs,expectedOutput) { 
  actualOutput = functionName(inputs[0],inputs[1],inputs[2]);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(functionName,inputs,expectedOutput,actualOutput);
}

inputs = ["*",0];
expectedOutput = "";
test(repeat,inputs,expectedOutput);

inputs = ["-",1];
expectedOutput = "";
expectedOutput = "-";
test(repeat,inputs,expectedOutput);

inputs = ["#",5];
expectedOutput = "#####";
test(repeat,inputs,expectedOutput);

inputs = ["*",2];
expectedOutput = "**";
test(repeat,inputs,expectedOutput);

/*------------------ Test RightJustifyLine function --------------*/

inputs = ["Foo",5];
expectedOutput = "  Foo";
test(rightJustifyLine,inputs,expectedOutput);

inputs = ["Omkar",0];
expectedOutput = "Omkar";
test(rightJustifyLine,inputs,expectedOutput);

inputs = ["Ok",3];
expectedOutput = " Ok";
test(rightJustifyLine,inputs,expectedOutput);

/*------------------ Test LeftJustifyLine function --------------*/

inputs = ["Foo",5];
expectedOutput = "Foo  ";
test(leftJustifyLine,inputs,expectedOutput);

inputs = ["Omkar",0];
expectedOutput = "Omkar";
test(leftJustifyLine,inputs,expectedOutput);

inputs = ["Ok",3];
expectedOutput = "Ok ";
test(leftJustifyLine,inputs,expectedOutput);

/*------------------ Test CreateLineGenerator function --------------*/

const testCreateLineGenerator = function(inputs,expectedOutput) { 
  let actualOutput = createLineGenerator(inputs[0],inputs[1],inputs[2]);
  actualOutput = actualOutput(5);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(createLineGenerator,inputs,expectedOutput,actualOutput);
}

inputs = ["*","*","*"];
expectedOutput = "*****";
testCreateLineGenerator(inputs,expectedOutput);

inputs = ["*","-","*"];
expectedOutput = "*---*";
testCreateLineGenerator(inputs,expectedOutput);

inputs = ["#"," ","#"];
expectedOutput = "#   #";
testCreateLineGenerator(inputs,expectedOutput);

/*------------------ Test CreateTriangle function --------------*/

inputs = [0,leftJustifyLine,starLineGenerator];
expectedOutput = [];
test(createTriangle,inputs,expectedOutput);

inputs = [1,leftJustifyLine,dashLineGenerator];
expectedOutput = [];
expectedOutput.push("-");
test(createTriangle,inputs,expectedOutput);

inputs = [2,leftJustifyLine,dashLineGenerator];
expectedOutput = [];
expectedOutput.push("- ");
expectedOutput.push("--");
test(createTriangle,inputs,expectedOutput);

inputs = [5,leftJustifyLine,dashLineGenerator];
expectedOutput = [];
expectedOutput.push("-    ");
expectedOutput.push("--   ");
expectedOutput.push("---  ");
expectedOutput.push("---- ");
expectedOutput.push("-----");
test(createTriangle,inputs,expectedOutput);

/*------------------ Test generateUpperPartOfDiamond function --------------*/

inputs = ["*",5,starLineGenerator];
expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" *** ");
test(generateUpperPartOfDiamond,inputs,expectedOutput);

inputs = ["*",7,starLineGenerator];
expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  ***  ");
expectedOutput.push(" ***** ");
test(generateUpperPartOfDiamond,inputs,expectedOutput);

/*------------------ Test generateLowerPartOfDiamond function --------------*/

inputs = ["*",5,starLineGenerator];
expectedOutput = [];
expectedOutput.push(" *** ");
expectedOutput.push("  *  ");
test(generateLowerPartOfDiamond,inputs,expectedOutput);

inputs = ["*",7,starLineGenerator];
expectedOutput = [];
expectedOutput.push(" ***** ");
expectedOutput.push("  ***  ");
expectedOutput.push("   *   ");
test(generateLowerPartOfDiamond,inputs,expectedOutput);

