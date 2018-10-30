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
let inputs = {type : "filled",height : 2, width : 2};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
inputs = {type : "filled",height : 5, width : 4};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
inputs = {type : "filled",height : 5, width : 7};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = []; 
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
inputs = {type : "filled",height :20, width : 7 }; 
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("**");
inputs = {type : "empty",height : 2, width : 2};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*****");
inputs = {type : "empty",height : 5, width : 4};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*****");
inputs = {type : "empty",height : 5, width : 7};
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("********************");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("********************");
inputs = {type : "empty",height :20, width : 7 };  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("--");
inputs = {type : "alternating",height : 2, width : 2};  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
inputs = {type : "alternating",height : 5, width : 4};  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
inputs = {type : "alternating",height : 5, width : 7};  
testGenerateRectangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
inputs = {type : "alternating",height :20, width : 7 };
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
inputs = {type : "left", height : 2, width : 0};
testGenerateTriangle(inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push("*  ");
expectedOutput.push("** ");
expectedOutput.push("***");
inputs = {type : "left", height : 3, width : 0};  
testGenerateTriangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("*     ");
expectedOutput.push("**    ");
expectedOutput.push("***   ");
expectedOutput.push("****  ");
expectedOutput.push("***** ");
expectedOutput.push("******");
inputs = {type : "left", height : 6, width : 0};  
testGenerateTriangle(inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push(" *");
expectedOutput.push("**");
inputs = {type : "right", height : 2, width : 0}; 
testGenerateTriangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *");
expectedOutput.push(" **");
expectedOutput.push("***");
inputs = {type : "right",height : 3, width : 0};
testGenerateTriangle(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("     *");
expectedOutput.push("    **");
expectedOutput.push("   ***");
expectedOutput.push("  ****");
expectedOutput.push(" *****");
expectedOutput.push("******");
inputs = {type : "right",height : 6, width : 0}; 
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
inputs = {type : "filled", height : 5, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  ***  ");
expectedOutput.push(" ***** ");
expectedOutput.push("*******");
expectedOutput.push(" ***** ");
expectedOutput.push("  ***  ");
expectedOutput.push("   *   ");
inputs = {type : "filled", height : 7, width : 0};
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
inputs = {type : "filled", height : 10, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" * * ");
expectedOutput.push("*   *");
expectedOutput.push(" * * ");
expectedOutput.push("  *  ");
inputs = {type : "hollow", height : 5, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  * *  ");
expectedOutput.push(" *   * ");
expectedOutput.push("*     *");
expectedOutput.push(" *   * ");
expectedOutput.push("  * *  ");
expectedOutput.push("   *   ");
inputs = {type : "hollow", height : 7, width : 0};  
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
inputs = {type : "hollow", height : 10, width : 0};
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" / \\ ");
expectedOutput.push("*   *");
expectedOutput.push(" \\ / ");
expectedOutput.push("  *  ");
inputs = {type : "angled", height : 5, width : 0};
testGenerateDiamond(inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  / \\  ");
expectedOutput.push(" /   \\ ");
expectedOutput.push("*     *");
expectedOutput.push(" \\   / ");
expectedOutput.push("  \\ /  ");
expectedOutput.push("   *   ");
inputs = {type : "angled", height : 7, width : 0};  
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
inputs = {type : "angled", height : 10, width : 0}; 
testGenerateDiamond(inputs,expectedOutput);

