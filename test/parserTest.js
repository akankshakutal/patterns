const assert = require("assert");
const parserLib = require("../parser.js");

const testFunction = function(functionName,inputs,expectedOutput) { 
  let actualOutput = functionName(inputs);
  assert.deepEqual(actualOutput,expectedOutput);
}

/*------------------ ExtractParameters function tests --------------*/

let inputs,expectedOutput;

inputs = ["Filled",5,6];
expectedOutput = {type : "Filled" , height : 5 , width : 6};
testFunction(parserLib.extractParameters,inputs,expectedOutput);

inputs = ["Empty",9,-3];
expectedOutput = {type : "Empty" , height : 9 , width : -3};
testFunction(parserLib.extractParameters,inputs,expectedOutput);

inputs = ["Empty",9,-3];
expectedOutput = {type : "Empty" , height : 9 , width : -3};
testFunction(parserLib.extractParameters,inputs,expectedOutput);

/*------------------ ExtractMultipleParameters function tests --------------*/

inputs = ["Filled",5,6,"Empty",3,4];
expectedOutput = ["normal",{type : "Filled" , height : 5 , width : 6},{type : "Empty", height : 3, width : 4}];
testFunction(parserLib.extractMultipleParameter,inputs,expectedOutput);

inputs = ["Empty",9,-3,4,"Hollow",5];
expectedOutput = ["normal", {type : "Empty" , height : 9 , width : -3}, {type : "Hollow", height : 5 ,width : undefined }];
testFunction(parserLib.extractMultipleParameter,inputs,expectedOutput);

inputs = ["Empty",9,-3,4,6,7,"Alternating",7];
expectedOutput = ["normal",{type : "Empty" , height : 9 , width : -3},{type : "Alternating", height:7, width : undefined}];
testFunction(parserLib.extractMultipleParameter,inputs,expectedOutput);

/*------------------ LineSeperator function tests --------------*/

inputs = ["*****","*****","*****"];
expectedOutput = "";
expectedOutput  = "*****\n";
expectedOutput += "*****\n";
expectedOutput += "*****";
testFunction(parserLib.lineSeperator,inputs,expectedOutput);

inputs = ["------","******","######","%%%%%%%"];
expectedOutput = "";
expectedOutput  = "------\n";
expectedOutput += "******\n";
expectedOutput += "######\n";
expectedOutput += "%%%%%%%";
testFunction(parserLib.lineSeperator,inputs,expectedOutput);

