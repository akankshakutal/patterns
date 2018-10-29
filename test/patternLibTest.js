const lib = require('../src/patternLib.js');
const { printLog } = require('../testFramework.js');
const assert = require('assert');
console.log("-------------------- Test Report ----------------------");

let actualOutput = lib.generateRectangle({type : "Filled",height : 2, width : 2}); 
let expectedOutput  = "**\n";
    expectedOutput += "**";
let inputs = {type : "Filled",height : 2, width : 2};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Filled",height : 4, width : 5});
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****";
inputs = {type : "Filled",height : 4, width : 5};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Filled",height : 7, width : 5});
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****";
inputs = {type : "Filled",height : 7, width : 5};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Filled",height : 7,  width : 20});
expectedOutput = ""; 
expectedOutput  = "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************";
inputs = {type : "Filled",height : 7, width : 20}; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Empty",height : 2, width : 2});
expectedOutput  = "**\n";
expectedOutput += "**";
inputs = {type : "Empty",height : 2, width : 2};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Empty",height : 4, width : 5});
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*****";
inputs = {type : "Empty",height : 4, width : 5};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Empty",height : 7, width : 5});
inputs = {type : "Empty",height : 7, width : 5};
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*****";
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Empty",height : 7 , width : 20});
expectedOutput = "";
expectedOutput  = "********************\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "********************";
inputs = {type : "Empty",height : 7, width : 20};  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Alternating",height : 2, width : 2});
expectedOutput  = "**\n";
expectedOutput += "--";
inputs = {type : "Alternating",height : 2, width : 2};  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Alternating",height : 4, width : 5});
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----";
inputs = {type : "Alternating",height : 4, width : 5};  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Alternating",height : 7, width : 5});
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****";
inputs = {type : "Alternating",height : 7, width : 5};  
assert.deepEqual(actualOutput,expectedOutput);  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle({type : "Alternating",height : 7, width : 20});
expectedOutput = "";
expectedOutput  = "********************\n";
expectedOutput += "--------------------\n";
expectedOutput += "********************\n";
expectedOutput += "--------------------\n";
expectedOutput += "********************\n";
expectedOutput += "--------------------\n";
expectedOutput += "********************";
inputs = {type : "Alternating",height : 7, width : 20};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

/*-------------------------Test Triangle ------------------------------------*/

actualOutput = lib.generateTriangle({type : "Left", height : 2, width : 0});
expectedOutput = "";
expectedOutput =  "* \n";
expectedOutput += "**"
inputs = {type : "Left", height : 2, width : 0};
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle({type : "Left", height : 3, width : 0});
expectedOutput = "";
expectedOutput =  "*  \n";
expectedOutput += "** \n";
expectedOutput += "***";
inputs = {type : "Filled",height : 3, width : 0};  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle({type : "Left", height : 6, width : 0});
expectedOutput = "";
expectedOutput =  "*     \n";
expectedOutput += "**    \n";
expectedOutput += "***   \n";
expectedOutput += "****  \n";
expectedOutput += "***** \n";
expectedOutput += "******"
inputs = {type : "Left", height : 6, width : 0};  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);


actualOutput = lib.generateTriangle({type : "Right", height : 2, width : 0});
expectedOutput = "";
expectedOutput =  " *\n";
expectedOutput += "**"
inputs = {type : "Right", height : 2, width : 0}; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle({type : "Right", height : 3, width : 0});
expectedOutput = "";
expectedOutput =  "  *\n";
expectedOutput += " **\n";
expectedOutput += "***";
inputs = {type : "Right",height : 3, width : 0};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle({type : "Right", height : 6, width : 0});
expectedOutput = "";
expectedOutput =  "     *\n";
expectedOutput += "    **\n";
expectedOutput += "   ***\n";
expectedOutput += "  ****\n";
expectedOutput += " *****\n";
expectedOutput += "******"
inputs = {type : "Right",height : 6, width : 0}; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

/*-------------------------- Test Diamond ----------------------------------*/

actualOutput = lib.generateDiamond({type : "Filled" ,height : 5, width : 0});
expectedOutput = "";
expectedOutput  = "  *  \n";
expectedOutput += " *** \n";
expectedOutput += "*****\n";
expectedOutput += " *** \n";
expectedOutput += "  *  ";
inputs = {type : "Filled", height : 5, width : 0}; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Filled", height : 7, width : 0});
expectedOutput = "";
expectedOutput  = "   *   \n";
expectedOutput += "  ***  \n";
expectedOutput += " ***** \n";
expectedOutput += "*******\n";
expectedOutput += " ***** \n";
expectedOutput += "  ***  \n";
expectedOutput += "   *   ";
inputs = {type : "Filled", height : 7, width : 0};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Filled", height : 10, width : 0});
expectedOutput = "";
expectedOutput  = "    *    \n"
expectedOutput += "   ***   \n";
expectedOutput += "  *****  \n";
expectedOutput += " ******* \n";
expectedOutput += "*********\n";
expectedOutput += " ******* \n";
expectedOutput += "  *****  \n";
expectedOutput += "   ***   \n";
expectedOutput += "    *    ";
inputs = {type : "Filled", height : 10, width : 0}; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Hollow", height : 5, width : 0});
expectedOutput = "";
expectedOutput  = "  *  \n";
expectedOutput += " * * \n";
expectedOutput += "*   *\n";
expectedOutput += " * * \n";
expectedOutput += "  *  ";
inputs = {type : "Hollow", height : 5, width : 0}; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Hollow", height : 7, width : 0});
expectedOutput = "";
expectedOutput  = "   *   \n";
expectedOutput += "  * *  \n";
expectedOutput += " *   * \n";
expectedOutput += "*     *\n";
expectedOutput += " *   * \n";
expectedOutput += "  * *  \n";
expectedOutput += "   *   ";
inputs = {type : "Hollow", height : 7, width : 0};  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Hollow", height : 10, width : 0});
expectedOutput = "";
expectedOutput  = "    *    \n"
expectedOutput += "   * *   \n";
expectedOutput += "  *   *  \n";
expectedOutput += " *     * \n";
expectedOutput += "*       *\n";
expectedOutput += " *     * \n";
expectedOutput += "  *   *  \n";
expectedOutput += "   * *   \n";
expectedOutput += "    *    ";
inputs = {type : "Hollow", height : 10, width : 0};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Angled", height : 5, width : 0});
expectedOutput = "";
expectedOutput  = "  *  \n";
expectedOutput += " / \\ \n";
expectedOutput += "*   *\n";
expectedOutput += " \\ / \n";
expectedOutput += "  *  ";
inputs = {type : "Angled", height : 5, width : 0};
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Angled", height : 7, width : 0});
expectedOutput = "";
expectedOutput  = "   *   \n";
expectedOutput += "  / \\  \n";
expectedOutput += " /   \\ \n";
expectedOutput += "*     *\n";
expectedOutput += " \\   / \n";
expectedOutput += "  \\ /  \n";
expectedOutput += "   *   ";
inputs = {type : "Angled", height : 7, width : 0};  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond({type : "Angled", height : 10, width : 0});
expectedOutput = "";
expectedOutput  = "    *    \n"
expectedOutput += "   / \\   \n";
expectedOutput += "  /   \\  \n";
expectedOutput += " /     \\ \n";
expectedOutput += "*       *\n";
expectedOutput += " \\     / \n";
expectedOutput += "  \\   /  \n";
expectedOutput += "   \\ /   \n";
expectedOutput += "    *    ";
inputs = {type : "Angled", height : 10, width : 0}; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

