const assert = require("assert");
const { printLog } = require("../testFramework.js");
const { extractParameters } = require("../parser.js");
const { repeat,
  rightJustifyLine,
  leftJustifyLine,
  centerJustifyLine,
  starLineGenerator,
  hollowLineGenerator,
  dashLineGenerator,
  upperAngledLineGenerator,
  lowerAngledLineGenerator,
  createLineGenerator,
  createTriangle,
  generateUpperPartOfDiamond,
  generateLowerPartOfDiamond,
  generateMirrorPattern,
  generateFlipedPattern } = require('../src/patternUtil.js');

/*------------------ ExtractParameters function tests --------------*/

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

/*------------------ RepeatCharacter function tests --------------*/

const testFunction = function(functionName,inputs,expectedOutput) { 
  actualOutput = functionName(inputs[0],inputs[1],inputs[2]);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(functionName,inputs,expectedOutput,actualOutput);
}

inputs = ["*",0];
expectedOutput = "";
testFunction(repeat,inputs,expectedOutput);

inputs = ["-",1];
expectedOutput = "";
expectedOutput = "-";
testFunction(repeat,inputs,expectedOutput);

inputs = ["#",5];
expectedOutput = "#####";
testFunction(repeat,inputs,expectedOutput);

inputs = ["*",2];
expectedOutput = "**";
testFunction(repeat,inputs,expectedOutput);

/*------------------ RightJustifyLine function tests --------------*/

inputs = ["Foo",5];
expectedOutput = "  Foo";
testFunction(rightJustifyLine,inputs,expectedOutput);

inputs = ["Omkar",0];
expectedOutput = "Omkar";
testFunction(rightJustifyLine,inputs,expectedOutput);

inputs = ["Ok",3];
expectedOutput = " Ok";
testFunction(rightJustifyLine,inputs,expectedOutput);

/*------------------ LeftJustifyLine function tests --------------*/

inputs = ["Foo",5];
expectedOutput = "Foo  ";
testFunction(leftJustifyLine,inputs,expectedOutput);

inputs = ["Omkar",0];
expectedOutput = "Omkar";
testFunction(leftJustifyLine,inputs,expectedOutput);

inputs = ["Ok",3];
expectedOutput = "Ok ";
testFunction(leftJustifyLine,inputs,expectedOutput);

/*------------------ CreateLineGenerator function tests --------------*/

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

/*------------------ CreateTriangle function tests --------------*/

inputs = [0,leftJustifyLine,starLineGenerator];
expectedOutput = [];
testFunction(createTriangle,inputs,expectedOutput);

inputs = [1,leftJustifyLine,dashLineGenerator];
expectedOutput = [];
expectedOutput.push("-");
testFunction(createTriangle,inputs,expectedOutput);

inputs = [2,leftJustifyLine,dashLineGenerator];
expectedOutput = [];
expectedOutput.push("- ");
expectedOutput.push("--");
testFunction(createTriangle,inputs,expectedOutput);

inputs = [5,leftJustifyLine,dashLineGenerator];
expectedOutput = [];
expectedOutput.push("-    ");
expectedOutput.push("--   ");
expectedOutput.push("---  ");
expectedOutput.push("---- ");
expectedOutput.push("-----");
testFunction(createTriangle,inputs,expectedOutput);

/*------------------ generateUpperPartOfDiamond function tests --------------*/

inputs = ["*",5,starLineGenerator];
expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" *** ");
testFunction(generateUpperPartOfDiamond,inputs,expectedOutput);

inputs = ["*",7,starLineGenerator];
expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  ***  ");
expectedOutput.push(" ***** ");
testFunction(generateUpperPartOfDiamond,inputs,expectedOutput);

/*------------------ generateLowerPartOfDiamond function tests --------------*/

inputs = ["*",5,starLineGenerator];
expectedOutput = [];
expectedOutput.push(" *** ");
expectedOutput.push("  *  ");
testFunction(generateLowerPartOfDiamond,inputs,expectedOutput);

inputs = ["*",7,starLineGenerator];
expectedOutput = [];
expectedOutput.push(" ***** ");
expectedOutput.push("  ***  ");
expectedOutput.push("   *   ");
testFunction(generateLowerPartOfDiamond,inputs,expectedOutput);

/*------------------ generateMirrorPattern function tests --------------*/

inputs = [[]];
expectedOutput = [];
testFunction(generateMirrorPattern,inputs,expectedOutput);

inputs = [["*"]];
expectedOutput = [];
expectedOutput.push("*");
testFunction(generateMirrorPattern,inputs,expectedOutput);

inputs = [["***","**","*"]];
expectedOutput = [];
expectedOutput.push("*");
expectedOutput.push("**");
expectedOutput.push("***");
testFunction(generateMirrorPattern,inputs,expectedOutput);

/*------------------ generateFlipedPattern function tests --------------*/

inputs = [[]];
expectedOutput = [];
testFunction(generateFlipedPattern,inputs,expectedOutput);

inputs = [["*"]];
expectedOutput = [];
expectedOutput.push("*");
testFunction(generateFlipedPattern,inputs,expectedOutput);

inputs = [["***","**","*"]];
expectedOutput = [];
expectedOutput.push("***");
expectedOutput.push("**");
expectedOutput.push("*");
testFunction(generateFlipedPattern,inputs,expectedOutput);

inputs = [["  *  ","/***\\","*****"]];
expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push("\\***/");
expectedOutput.push("*****");
testFunction(generateFlipedPattern,inputs,expectedOutput);

