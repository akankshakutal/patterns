const lib = require('../src/patternLib.js');
const { printLog } = require('../testFramework.js');
const assert = require('assert');
console.log("-------------------- Test Report ----------------------");

const testGenerateRectangle = function(inputs,expectedOutput) { 
  let actualOutput = lib.generateRectangle(inputs);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);
}

let expectedOutput  = ["**","**"];
let inputs = {type : "Filled",height : 2, width : 2};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
inputs = {type : "Filled",height : 4, width : 5};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
inputs = {type : "Filled",height : 7, width : 5};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = []; 
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
inputs = {type : "Filled",height : 7, width : 20}; 
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("**");
inputs = {type : "Empty",height : 2, width : 2};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*****");
inputs = {type : "Empty",height : 4, width : 5};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*****");
inputs = {type : "Empty",height : 7, width : 5};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("********************");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("********************");
inputs = {type : "Empty",height : 7, width : 20};  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("--");
inputs = {type : "Alternating",height : 2, width : 2};  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
inputs = {type : "Alternating",height : 4, width : 5};  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
inputs = {type : "Alternating",height : 7, width : 5};  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
inputs = {type : "Alternating",height : 7, width : 20};
testGenerateRectangle(inputs,expectedOutput);

/*-------------------------Test Triangle ------------------------------------*/

const testGenerateTriangle = function(inputs,expectedOutput) { 
  actualOutput = lib.generateTriangle(inputs);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);
}

expectedOutput = [];
expectedOutput.push("* ");
expectedOutput.push("**");
inputs = {type : "Left", height : 2, width : 0};
testGenerateTriangle(inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push("*  ");
expectedOutput.push("** ");
expectedOutput.push("***");
inputs = {type : "Left", height : 3, width : 0};  
testGenerateTriangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("*     ");
expectedOutput.push("**    ");
expectedOutput.push("***   ");
expectedOutput.push("****  ");
expectedOutput.push("***** ");
expectedOutput.push("******");
inputs = {type : "Left", height : 6, width : 0};  
testGenerateTriangle(inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push(" *");
expectedOutput.push("**");
inputs = {type : "Right", height : 2, width : 0}; 
testGenerateTriangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *");
expectedOutput.push(" **");
expectedOutput.push("***");
inputs = {type : "Right",height : 3, width : 0};
testGenerateTriangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("     *");
expectedOutput.push("    **");
expectedOutput.push("   ***");
expectedOutput.push("  ****");
expectedOutput.push(" *****");
expectedOutput.push("******");
inputs = {type : "Right",height : 6, width : 0}; 
testGenerateTriangle(inputs,expectedOutput);

/*-------------------------- Test Diamond ----------------------------------*/

const testGenerateDiamond = function(inputs,expectedOutput) { 
  actualOutput = lib.generateDiamond(inputs);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);
}

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" *** ");
expectedOutput.push("*****");
expectedOutput.push(" *** ");
expectedOutput.push("  *  ");
inputs = {type : "Filled", height : 5, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  ***  ");
expectedOutput.push(" ***** ");
expectedOutput.push("*******");
expectedOutput.push(" ***** ");
expectedOutput.push("  ***  ");
expectedOutput.push("   *   ");
inputs = {type : "Filled", height : 7, width : 0};
testGenerateDiamond(inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push("    *    ");
expectedOutput.push("   ***   ");
expectedOutput.push("  *****  ");
expectedOutput.push(" ******* ");
expectedOutput.push("*********");
expectedOutput.push(" ******* ");
expectedOutput.push("  *****  ");
expectedOutput.push("   ***   ");
expectedOutput.push("    *    ");
inputs = {type : "Filled", height : 10, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" * * ");
expectedOutput.push("*   *");
expectedOutput.push(" * * ");
expectedOutput.push("  *  ");
inputs = {type : "Hollow", height : 5, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  * *  ");
expectedOutput.push(" *   * ");
expectedOutput.push("*     *");
expectedOutput.push(" *   * ");
expectedOutput.push("  * *  ");
expectedOutput.push("   *   ");
inputs = {type : "Hollow", height : 7, width : 0};  
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("    *    ");
expectedOutput.push("   * *   ");
expectedOutput.push("  *   *  ");
expectedOutput.push(" *     * ");
expectedOutput.push("*       *");
expectedOutput.push(" *     * ");
expectedOutput.push("  *   *  ");
expectedOutput.push("   * *   ");
expectedOutput.push("    *    ");
inputs = {type : "Hollow", height : 10, width : 0};
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" / \\ ");
expectedOutput.push("*   *");
expectedOutput.push(" \\ / ");
expectedOutput.push("  *  ");
inputs = {type : "Angled", height : 5, width : 0};
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  / \\  ");
expectedOutput.push(" /   \\ ");
expectedOutput.push("*     *");
expectedOutput.push(" \\   / ");
expectedOutput.push("  \\ /  ");
expectedOutput.push("   *   ");
inputs = {type : "Angled", height : 7, width : 0};  
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("    *    ");
expectedOutput.push("   / \\   ");
expectedOutput.push("  /   \\  ");
expectedOutput.push(" /     \\ ");
expectedOutput.push("*       *");
expectedOutput.push(" \\     / ");
expectedOutput.push("  \\   /  ");
expectedOutput.push("   \\ /   ");
expectedOutput.push("    *    ");
inputs = {type : "Angled", height : 10, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

