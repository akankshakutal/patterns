const lib = require('../src/patternLib.js');
const { printLog } = require('../testFramework.js');
const assert = require('assert');


/*------------------------ Test Functions ----------------------------*/

const test = function(functionName,inputs,expectedOutput) { 
  let actualOutput = functionName(inputs);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(functionName,inputs,expectedOutput,actualOutput);
}

const testCreateFunction = function(functionName,inputs,expectedOutput) { 
  let actualOutput = functionName(inputs[0],inputs[1]);
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(functionName,inputs,expectedOutput,actualOutput);
}

console.log("-------------------- Test Report ----------------------");

/*------------------------ Test createFilledRect Function ----------------------------*/

let inputs = [0,0];
let expectedOutput = [];
testCreateFunction(lib.createFilledRect,inputs,expectedOutput);

inputs = [1,1];
expectedOutput = [];
expectedOutput.push("*");
testCreateFunction(lib.createFilledRect,inputs,expectedOutput);

inputs = [2,2];
expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("**");
testCreateFunction(lib.createFilledRect,inputs,expectedOutput);

inputs = [5,5];
expectedOutput = [];
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
testCreateFunction(lib.createFilledRect,inputs,expectedOutput);

/*------------------------ Test createEmptyRect Function ----------------------------*/

inputs = [0,0];
expectedOutput = [];
testCreateFunction(lib.createEmptyRect,inputs,expectedOutput);

inputs = [0,10];
expectedOutput = [];
testCreateFunction(lib.createEmptyRect,inputs,expectedOutput);

inputs = [2,2];
expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("**");
testCreateFunction(lib.createEmptyRect,inputs,expectedOutput);

inputs = [5,5];
expectedOutput =  [];
expectedOutput.push("*****");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*****");
testCreateFunction(lib.createEmptyRect,inputs,expectedOutput);

/*------------------------Test createAlternateRect Function ----------------------------*/

inputs = [0,0];
expectedOutput = [];
testCreateFunction(lib.createAlternateRect,inputs,expectedOutput);

inputs = [1,1];
expectedOutput = [];
expectedOutput.push("*");
testCreateFunction(lib.createAlternateRect,inputs,expectedOutput);

inputs = [2,2];
expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("--");
testCreateFunction(lib.createAlternateRect,inputs,expectedOutput);

inputs = [5,5];
expectedOutput = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
testCreateFunction(lib.createAlternateRect,inputs,expectedOutput);

/*------------------------Test createLeftTriangle Function ----------------------------*/

inputs = [0];
expectedOutput = [];
testCreateFunction(lib.createLeftTriangle,inputs,expectedOutput);

inputs = [1];
expectedOutput =  [];
expectedOutput.push("*");
testCreateFunction(lib.createLeftTriangle,inputs,expectedOutput);

inputs = [2];
expectedOutput = [];
expectedOutput.push("* ");
expectedOutput.push("**");
testCreateFunction(lib.createLeftTriangle,inputs,expectedOutput);

inputs = [5];
expectedOutput = [];
expectedOutput.push("*    ");
expectedOutput.push("**   ");
expectedOutput.push("***  ");
expectedOutput.push("**** ");
expectedOutput.push("*****");
testCreateFunction(lib.createLeftTriangle,inputs,expectedOutput);

/*------------------------Test createRightTriangle Function ----------------------------*/

inputs = [0];
expectedOutput = [];
testCreateFunction(lib.createRightTriangle,inputs,expectedOutput);

inputs = [1];
expectedOutput = [];
expectedOutput.push("*");
testCreateFunction(lib.createRightTriangle,inputs,expectedOutput);

inputs = [2];
expectedOutput = [];
expectedOutput.push(" *");
expectedOutput.push("**");
testCreateFunction(lib.createRightTriangle,inputs,expectedOutput);

inputs = [5];
expectedOutput = [];
expectedOutput.push("    *");
expectedOutput.push("   **");
expectedOutput.push("  ***");
expectedOutput.push(" ****");
expectedOutput.push("*****");
testCreateFunction(lib.createRightTriangle,inputs,expectedOutput);

/*------------------------Test createFilledDiamond Function ----------------------------*/

inputs = [3];
expectedOutput = [];
expectedOutput.push(" * ");
expectedOutput.push("***");
expectedOutput.push(" * ");
testCreateFunction(lib.createFilledDiamond,inputs,expectedOutput);

inputs = [5];
expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" *** ");
expectedOutput.push("*****")
expectedOutput.push(" *** ");
expectedOutput.push("  *  ");
testCreateFunction(lib.createFilledDiamond,inputs,expectedOutput);

/*------------------------Test createHollowDiamond Function ----------------------------*/

inputs = [3];
expectedOutput = [];
expectedOutput.push(" * ");
expectedOutput.push("* *");
expectedOutput.push(" * ");
testCreateFunction(lib.createHollowDiamond,inputs,expectedOutput);

inputs = [5];
expectedOutput =  [];
expectedOutput.push("  *  ");
expectedOutput.push(" * * ");
expectedOutput.push("*   *");
expectedOutput.push(" * * ");
expectedOutput.push("  *  ");
testCreateFunction(lib.createHollowDiamond,inputs,expectedOutput);

/*------------------------Test createAngledDiamond Function ----------------------------*/

inputs = [5];
expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" / \\ ");
expectedOutput.push("*   *");
expectedOutput.push(" \\ / ");
expectedOutput.push("  *  ");
testCreateFunction(lib.createAngledDiamond,inputs,expectedOutput);

inputs = [7];
expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  / \\  ");
expectedOutput.push(" /   \\ ");
expectedOutput.push("*     *");
expectedOutput.push(" \\   / ");
expectedOutput.push("  \\ /  ");
expectedOutput.push("   *   ");
testCreateFunction(lib.createAngledDiamond,inputs,expectedOutput);

/*------------------------Test generateMirrorPattern Function ----------------------------*/

inputs = [[]];
expectedOutput = [];
testCreateFunction(lib.generateMirrorPattern,inputs,expectedOutput);

inputs = [["*"]];
expectedOutput = [];
expectedOutput.push("*");
testCreateFunction(lib.generateMirrorPattern,inputs,expectedOutput);

inputs = [["***","**","*"]];
expectedOutput = [];
expectedOutput.push("*");
expectedOutput.push("**");
expectedOutput.push("***");
testCreateFunction(lib.generateMirrorPattern,inputs,expectedOutput);

/*------------------------Test generateFlipedPattern Function ----------------------------*/

inputs = [[]];
expectedOutput = [];
testCreateFunction(lib.generateFlipedPattern,inputs,expectedOutput);

inputs = [["*"]];
expectedOutput = [];
expectedOutput.push("*");
testCreateFunction(lib.generateFlipedPattern,inputs,expectedOutput);

inputs = [["***","**","*"]];
expectedOutput = [];
expectedOutput.push("***");
expectedOutput.push("**");
expectedOutput.push("*");
testCreateFunction(lib.generateFlipedPattern,inputs,expectedOutput);

inputs = [["  *  ","/***\\","*****"]];
expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push("\\***/");
expectedOutput.push("*****");
testCreateFunction(lib.generateFlipedPattern,inputs,expectedOutput);

/*------------------------Test generateRectangle Function ----------------------------*/

expectedOutput  = ["**","**"];
inputs = {type : "filled",height : 2, width : 2};
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
inputs = {type : "filled",height : 5, width : 4};
test(lib.generateRectangle,inputs,expectedOutput);


expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
expectedOutput.push("*****");
inputs = {type : "filled",height : 5, width : 7};
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput = []; 
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
expectedOutput.push("********************");
inputs = {type : "filled",height :20, width : 7 }; 
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("**");
inputs = {type : "empty",height : 2, width : 2};
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*****");
inputs = {type : "empty",height : 5, width : 4};
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*   *");
expectedOutput.push("*****");
inputs = {type : "empty",height : 5, width : 7};
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("********************");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("*                  *");
expectedOutput.push("********************");
inputs = {type : "empty",height :20, width : 7 };  
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("**");
expectedOutput.push("--");
inputs = {type : "alternating",height : 2, width : 2};  
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
inputs = {type : "alternating",height : 5, width : 4};  
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
expectedOutput.push("-----");
expectedOutput.push("*****");
inputs = {type : "alternating",height : 5, width : 7};  
test(lib.generateRectangle,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
expectedOutput.push("--------------------");
expectedOutput.push("********************");
inputs = {type : "alternating",height :20, width : 7 };
test(lib.generateRectangle,inputs,expectedOutput);

/*------------------------Test generateTriangle Function ----------------------------*/

expectedOutput = [];
expectedOutput.push("* ");
expectedOutput.push("**");
inputs = {type : "left", height : 2, width : 0};
test(lib.generateTriangle,inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push("*  ");
expectedOutput.push("** ");
expectedOutput.push("***");
inputs = {type : "left", height : 3, width : 0};  
test(lib.generateTriangle,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("*     ");
expectedOutput.push("**    ");
expectedOutput.push("***   ");
expectedOutput.push("****  ");
expectedOutput.push("***** ");
expectedOutput.push("******");
inputs = {type : "left", height : 6, width : 0};  
test(lib.generateTriangle,inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push(" *");
expectedOutput.push("**");
inputs = {type : "right", height : 2, width : 0}; 
test(lib.generateTriangle,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *");
expectedOutput.push(" **");
expectedOutput.push("***");
inputs = {type : "right",height : 3, width : 0};
test(lib.generateTriangle,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("     *");
expectedOutput.push("    **");
expectedOutput.push("   ***");
expectedOutput.push("  ****");
expectedOutput.push(" *****");
expectedOutput.push("******");
inputs = {type : "right",height : 6, width : 0}; 
test(lib.generateTriangle,inputs,expectedOutput);

/*-------------------------- Test generateDiamond function ----------------------------------*/

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" *** ");
expectedOutput.push("*****");
expectedOutput.push(" *** ");
expectedOutput.push("  *  ");
inputs = {type : "filled", height : 5, width : 0}; 
test(lib.generateDiamond,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  ***  ");
expectedOutput.push(" ***** ");
expectedOutput.push("*******");
expectedOutput.push(" ***** ");
expectedOutput.push("  ***  ");
expectedOutput.push("   *   ");
inputs = {type : "filled", height : 7, width : 0};
test(lib.generateDiamond,inputs,expectedOutput);


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
test(lib.generateDiamond,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" * * ");
expectedOutput.push("*   *");
expectedOutput.push(" * * ");
expectedOutput.push("  *  ");
inputs = {type : "hollow", height : 5, width : 0}; 
test(lib.generateDiamond,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  * *  ");
expectedOutput.push(" *   * ");
expectedOutput.push("*     *");
expectedOutput.push(" *   * ");
expectedOutput.push("  * *  ");
expectedOutput.push("   *   ");
inputs = {type : "hollow", height : 7, width : 0};  
test(lib.generateDiamond,inputs,expectedOutput);

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
test(lib.generateDiamond,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" / \\ ");
expectedOutput.push("*   *");
expectedOutput.push(" \\ / ");
expectedOutput.push("  *  ");
inputs = {type : "angled", height : 5, width : 0};
test(lib.generateDiamond,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("   *   ");
expectedOutput.push("  / \\  ");
expectedOutput.push(" /   \\ ");
expectedOutput.push("*     *");
expectedOutput.push(" \\   / ");
expectedOutput.push("  \\ /  ");
expectedOutput.push("   *   ");
inputs = {type : "angled", height : 7, width : 0};  
test(lib.generateDiamond,inputs,expectedOutput);

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
test(lib.generateDiamond,inputs,expectedOutput);

/*-------------------------- Test generatePattern function ----------------------------------*/

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
inputs = ["normal",{type : "alternating_rectangle",height :5, width : 2 }];
test(lib.generatePattern,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" * * ");
expectedOutput.push("*   *");
expectedOutput.push(" * * ");
expectedOutput.push("  *  ");
inputs = ["normal",{type : "hollow_diamond", height : 5, width : 0}]; 
test(lib.generatePattern,inputs,expectedOutput);


expectedOutput = [];
expectedOutput.push("     *");
expectedOutput.push("    **");
expectedOutput.push("   ***");
expectedOutput.push("  ****");
expectedOutput.push(" *****");
expectedOutput.push("******");
inputs =["normal",{type : "right_triangle",height : 6, width : 0}]; 
test(lib.generatePattern,inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("*****");
expectedOutput.push("-----");
inputs = ["flip",{type : "alternating_rectangle",height : 5, width : 2 }];
test(lib.generatePattern,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("  *  ");
expectedOutput.push(" \\ / ");
expectedOutput.push("*   *");
expectedOutput.push(" / \\ ");
expectedOutput.push("  *  ");
inputs = ["flip",{type : "angled_diamond",height : 5 ,width : 2}];
test(lib.generatePattern,inputs,expectedOutput);

expectedOutput = [];
expectedOutput.push("*****");
expectedOutput.push("**** ");
expectedOutput.push("***  ");
expectedOutput.push("**   ");
expectedOutput.push("*    ");
inputs = ["mirror",{type : "left_triangle",height : 5}];
test(lib.generatePattern,inputs,expectedOutput);

expectedOutput  = [];
expectedOutput.push("***** *    ");
expectedOutput.push("----- **   ");
expectedOutput.push("***** ***  ");
expectedOutput.push("----- **** ");
expectedOutput.push("***** *****");
inputs = ["normal",{type : "alternating_rectangle",height :5, width : 5 },{type : "left_triangle", height : 5 }];
test(lib.generatePattern,inputs,expectedOutput);


expectedOutput  = [];
expectedOutput.push("*       *  ");
expectedOutput.push("**     *** ");
expectedOutput.push("***   *****");
expectedOutput.push("****   *** ");
expectedOutput.push("*****   *  ");
inputs = ["normal",{type : "left_triangle",height :5, width : 5 },{type : "filled_diamond", height : 5 }];
test(lib.generatePattern,inputs,expectedOutput);


expectedOutput  = [];
expectedOutput.push("*****     *");
expectedOutput.push("*****    **");
expectedOutput.push("*****   ***");
expectedOutput.push("*****  ****");
expectedOutput.push("***** *****");
inputs = ["normal",{type : "filled_rectangle",height :5, width : 5 },{type : "right_triangle", height : 5 }];
test(lib.generatePattern,inputs,expectedOutput);
