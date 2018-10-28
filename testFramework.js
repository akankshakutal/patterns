const { zipArrays } = require('../arrayAssignment/lib/zipArrays.js');
const justify = function(text) { 
  let noOfSpaces = 25 - text.length;
  let spaces = new Array(noOfSpaces).fill(" ").join("");
  return text+spaces;
}

const printLog = function (functionName,inputs,expectedOutput,actualOutput) { 
  expectedOutput = expectedOutput.split("\n");
  actualOutput = actualOutput.split("\n");
   let output = zipArrays(expectedOutput,actualOutput);
  console.log("--------------",functionName.name,"-----------------");
  console.log("\n Inputs      : ",inputs);
  console.log(justify("\nExpected output"),justify("actual output"));
  for(let index=0; index<output.length; index++) {
    console.log(justify(output[index][0]),justify(output[index][1]));
  }
}

exports.printLog = printLog;
