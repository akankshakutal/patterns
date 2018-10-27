const lib = require('../src/patternLib.js');
const { printLog } = require('../testFramework.js');
const assert = require('assert');
console.log("-------------------- Test Report ----------------------");

let actualOutput = lib.generateRectangle("Filled",2,2); 
let expectedOutput  = "**\n";
    expectedOutput += "**";
let inputs = ["Filled",2,2];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("Filled",5,4);
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****";
inputs = ["Filled",5,4];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("Filled",5,7);
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****";
inputs = ["Filled",5,7];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("Filled",20,7);
expectedOutput = "";
expectedOutput  = "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************\n";
expectedOutput += "********************";
inputs = ["Filled",20,7]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("Empty",2,2);
expectedOutput  = "**\n";
expectedOutput += "**";
inputs = ["Empty",2,2];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("Empty",5,4);
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "*   *\n";
expectedOutput += "*   *\n";
expectedOutput += "*****";
inputs = ["Empty",5,4];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("Empty",5,7);
inputs = ["Empty",5,7];
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

actualOutput = lib.generateRectangle("Empty",20,7);
expectedOutput = "";
expectedOutput  = "********************\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "*                  *\n";
expectedOutput += "********************";
inputs = ["Empty",20,7];  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("alternating",2,2);
expectedOutput  = "**\n";
expectedOutput += "--";
inputs = ["alternating",2,2];  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("alternating",5,4);
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----";
inputs = ["alternating",5,4];  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("alternating",5,7);
expectedOutput  = "";
expectedOutput  = "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****\n";
expectedOutput += "-----\n";
expectedOutput += "*****";
inputs = ["alternating",5,7];  
assert.deepEqual(actualOutput,expectedOutput);  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateRectangle("alternating",20,7);
expectedOutput = "";
expectedOutput  = "********************\n";
expectedOutput += "--------------------\n";
expectedOutput += "********************\n";
expectedOutput += "--------------------\n";
expectedOutput += "********************\n";
expectedOutput += "--------------------\n";
expectedOutput += "********************";
inputs = ["alternating",20,7]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateRectangle,inputs,expectedOutput,actualOutput);
/*-------------------------Test Triangle ------------------------------------*/
actualOutput = lib.generateTriangle("Left",2);
expectedOutput = "";
expectedOutput =  "*\n";
expectedOutput += "**"
inputs = ["left",2];
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle("Left",3);
expectedOutput = "";
expectedOutput =  "*\n";
expectedOutput += "**\n";
expectedOutput += "***";
inputs = ["left",3];  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle("Left",6);
expectedOutput = "";
expectedOutput =  "*\n";
expectedOutput += "**\n";
expectedOutput += "***\n";
expectedOutput += "****\n";
expectedOutput += "*****\n";
expectedOutput += "******"
inputs = ["left",6];  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);


actualOutput = lib.generateTriangle("Right",2);
expectedOutput = "";
expectedOutput =  " *\n";
expectedOutput += "**"
inputs = ["Right",2]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle("Right",3);
expectedOutput = "";
expectedOutput =  "  *\n";
expectedOutput += " **\n";
expectedOutput += "***";
inputs = ["Right",3];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateTriangle("Right",6);
expectedOutput = "";
expectedOutput =  "     *\n";
expectedOutput += "    **\n";
expectedOutput += "   ***\n";
expectedOutput += "  ****\n";
expectedOutput += " *****\n";
expectedOutput += "******"
inputs = ["Right",6]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateTriangle,inputs,expectedOutput,actualOutput);

/*-------------------------- Test Diamond ----------------------------------*/

actualOutput = lib.generateDiamond("Filled",5);
expectedOutput = "";
expectedOutput  = "  *\n";
expectedOutput += " ***\n";
expectedOutput += "*****\n";
expectedOutput += " ***\n";
expectedOutput += "  *";
inputs = ["Filled",5]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Filled",7);
expectedOutput = "";
expectedOutput  = "   *\n";
expectedOutput += "  ***\n";
expectedOutput += " *****\n";
expectedOutput += "*******\n";
expectedOutput += " *****\n";
expectedOutput += "  ***\n";
expectedOutput += "   *";
inputs = ["Filled",7];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Filled",10);
expectedOutput = "";
expectedOutput  = "    *\n"
expectedOutput += "   ***\n";
expectedOutput += "  *****\n";
expectedOutput += " *******\n";
expectedOutput += "*********\n";
expectedOutput += " *******\n";
expectedOutput += "  *****\n";
expectedOutput += "   ***\n";
expectedOutput += "    *";
inputs = ["Filled",10]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Hollow",5);
expectedOutput = "";
expectedOutput  = "  *\n";
expectedOutput += " * *\n";
expectedOutput += "*   *\n";
expectedOutput += " * *\n";
expectedOutput += "  *";
inputs = ["Hollow",5]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Hollow",7);
expectedOutput = "";
expectedOutput  = "   *\n";
expectedOutput += "  * *\n";
expectedOutput += " *   *\n";
expectedOutput += "*     *\n";
expectedOutput += " *   *\n";
expectedOutput += "  * *\n";
expectedOutput += "   *";
inputs = ["Hollow",7];  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Hollow",10);
expectedOutput = "";
expectedOutput  = "    *\n"
expectedOutput += "   * *\n";
expectedOutput += "  *   *\n";
expectedOutput += " *     *\n";
expectedOutput += "*       *\n";
expectedOutput += " *     *\n";
expectedOutput += "  *   *\n";
expectedOutput += "   * *\n";
expectedOutput += "    *";
inputs = ["Hollow",10];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Angled",5);
expectedOutput = "";
expectedOutput  = "  *\n";
expectedOutput += " / \\\n";
expectedOutput += "*   *\n";
expectedOutput += " \\ /\n";
expectedOutput += "  *";
inputs = ["Angled",5];
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Angled",7);
expectedOutput = "";
expectedOutput  = "   *\n";
expectedOutput += "  / \\\n";
expectedOutput += " /   \\\n";
expectedOutput += "*     *\n";
expectedOutput += " \\   /\n";
expectedOutput += "  \\ /\n";
expectedOutput += "   *";
inputs = ["Angled",7];  
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

actualOutput = lib.generateDiamond("Angled",10);
expectedOutput = "";
expectedOutput  = "    *\n"
expectedOutput += "   / \\\n";
expectedOutput += "  /   \\\n";
expectedOutput += " /     \\\n";
expectedOutput += "*       *\n";
expectedOutput += " \\     /\n";
expectedOutput += "  \\   /\n";
expectedOutput += "   \\ /\n";
expectedOutput += "    *";
inputs = ["Angled",10]; 
assert.deepEqual(actualOutput,expectedOutput);
printLog(lib.generateDiamond,inputs,expectedOutput,actualOutput);

