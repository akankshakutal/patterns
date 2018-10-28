exports.repeatCharacter = function (character,times) {
  return new Array(times).fill(character).join("");
}

exports. generateLine = function(leftChar,middleChar,rightChar,width) { 
  let leftBorderWidth = 1 % (width + 1);
  let rightBorderWidth = 1 % width;
  let line = [];
  line[0] = repeatCharacter(leftChar, leftBorderWidth);
  line[1] = repeatCharacter(middleChar, width - 2);
  line[2] = repeatCharacter(rightChar, rightBorderWidth);
  return line.join("");
}

exports.createFilledRect = function(width,height) {
  let rectangle = "";
  let delimeter = "";
  for(let row=0; row<height; row++) {
    rectangle += delimeter +  exports.repeatCharacter("*",width);
    delimeter = "\n";
  }
  return rectangle;
}

exports.createEmptyRect = function (width,height) {
  let rectangle = [];
  rectangle[0] = exports.repeatCharacter("*",width);
  for(let row = 1; row < height-1; row++){
    rectangle[row] = "*" + exports.repeatCharacter(" ",width-2) + "*";
  }
  rectangle[height-1] = exports.repeatCharacter("*",width);
  return rectangle.join("\n");
}

exports.createAlternateRect = function(width,height) {
  let delimeter = "";
  let rectangle = "";
  for(let row=0; row<height; row++) {
    symbol= "-";
    if(row%2 == 0) {
      symbol= "*";
    } 
    rectangle += delimeter + exports.repeatCharacter(symbol,width) ;
    delimeter = "\n";
  }
  return rectangle;
}


exports.createLeftTriangle = function(height) {
  let line = "";
  let delimeter = "";
  for(row=0; row<height; row++) {
    line += delimeter + exports.repeatCharacter("*",row+1);
    delimeter = "\n"
  }
  return line;
}

exports.createRightTriangle = function (height) {
  let line = "";
  let delimeter = "";
  for(let row=height; row>0; row--) {
    line += delimeter + exports.repeatCharacter(" ",row-1);
    line += exports.repeatCharacter("*",height-row+1);
    delimeter = "\n";
  }
  return line;
}

exports.createFilledDiamond = function(height){
  let diamond = [];
  let spaces = 1;
  for(let row = 0; row < height; row++) {
    let numOfSpacesNeeded = Math.abs((height - spaces)/2);
    let numOfStarNeeded = (height - (numOfSpacesNeeded*2));
    diamond[row] = exports.repeatCharacter(" ",numOfSpacesNeeded);
    diamond[row] += exports.repeatCharacter("*",numOfStarNeeded);
    spaces += 2;
  }
  return diamond.join("\n");
}

exports.upperPartOfHollow =function (height) {
  let line = "";
  let delimeter = "";
  let symbol = " ";
  let row = Math.floor(height/2);
  line += delimeter + exports.repeatCharacter(" ",row) + "*";
  for(let row=Math.ceil(height/2)-1; row>0; row--) {
    delimeter = "\n";
    line += delimeter + exports.repeatCharacter(" ",row-1) +"*"+ symbol+"*";
    symbol+= "  ";
  }
  return line;
}

exports.createHollowDiamond = function(height) {
  let delimeter = "\n";
  let line = exports.upperPartOfHollow(height);
  let len = height - 2;
  for(let row=1; row<Math.ceil(height/2)-1; row++) {
    len -= 2;
    line += delimeter + exports.repeatCharacter(" ",row)+"*"+exports.repeatCharacter(" ",len)+"*";
  }
  line += delimeter + exports.repeatCharacter(" ",Math.floor(height/2)) + "*";
  let diamond = line;
  return diamond;
}

exports.upperPartOfAngled = function (height) {
  let line = "";
  let delimeter = "";
  let symbol = " ";
  let row = Math.floor(height/2);
  line += delimeter + exports.repeatCharacter(" ",row) + "*";
  delimeter = "\n";
  for(let row=(Math.floor(height/2))-1; row>0; row--) {
    line += delimeter + exports.repeatCharacter(" ",row) +"/"+ symbol+"\\";
    symbol += "  ";
  }
  if(height>1) {
  line += delimeter + exports.repeatCharacter(" ",0) +"*"+ symbol+"*";
  }
  return line;
}

exports.createAngledDiamond = function(height) {
  let line = exports.upperPartOfAngled(height);
  let delimeter = "\n";
  let len = height-2;
  for(let row=1; row<(height/2)-1; row++) {
    len -= 2;
    line += delimeter + exports.repeatCharacter(" ",row)+"\\"+exports.repeatCharacter(" ",len)+"/";
  }
  line += delimeter + exports.repeatCharacter(" ",Math.floor(height/2)) + "*";
  let diamond = line;
  return diamond;
}

