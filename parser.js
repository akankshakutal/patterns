const extractParameters = function (userArgs) { 
  let parameters = {};
  parameters.type = userArgs[0];
  parameters.height = +userArgs[1];
  parameters.width = +userArgs[2];
  return parameters;
}

const lineSeperator = function(list) { 
  let result = list.join("\n");
  return result;
}

const extractMultipleParameter = function(userArgs) { 
  let parameters = ["normal"];
  let count = 0;
  if(userArgs[0] == "flip" || userArgs[0] == "mirror" ) {
    parameters = [userArgs[0]];
    count =1;
  }
  for(let index=count; index<userArgs.length; index++ ) {
    if(isNaN(+userArgs[index])) {
      let parameter = userArgs.slice(index,index+4);
      parameters.push(extractParameters(parameter));
    }
  }
    return parameters;
}

const zipArrays = function(dataSet1,dataSet2) { 
  let length = Math.max(dataSet1.length,dataSet2.length);
  let result = [];
  for(let index=0; index<length; index++) {
    result[index] = [dataSet1[index],dataSet2[index]];
  }
  return result;
}

exports.zipArrays = zipArrays;
exports.extractMultipleParameter = extractMultipleParameter;
exports.extractParameters = extractParameters;
exports.lineSeperator = lineSeperator;
