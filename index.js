var morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  v: "...-",
  x: "-..-",
  y: "-.--",
  z: "--.."
};



var reverseCypher = (cypher)=>{

var reverseCypherObj = {};

for(var i in cypher){
// reverse morse code
reverseCypherObj["a"+cypher[i]] = i;
}
return reverseCypherObj
}


var computeMorse  = (type, code) =>{
if(type == "encode"){
var cypher = morse;
}
else{
 var cypher = reverseCypher(morse);
}
//to suit regex for morse code
code =  " "+ code
for(var i in cypher){
// Set regex
regex = i.replace(/[-.]/g, '\\$&' );
regex = (regex.length == 1 ? regex : "\\s"+regex.substr(1) +" ")
re = new RegExp(regex, "g");
//covert
code = code.replace(re, cypher[i] + " ");
}
return code
}

var computeCaeser  = (type, code) =>{
if(type == "encode"){
var change = 3;
}
else{
 var change = -3;
}
//Spilt String
codeArray =  code.split("");
for(i=0; i<codeArray.length; i++){
//Check for char beyond 26 chars
codeInt = (parseInt(codeArray[i],36)+change > 36 ? parseInt(codeArray[i],36)-26 : parseInt(codeArray[i],36)+change < 10 ? parseInt(codeArray[i],36) + 26 : parseInt(codeArray[i],36));
//Replace letters, check for spaces
codeArray[i] = (isNaN(codeInt) ? " " : String.fromCharCode(codeInt+87+change)) ;
}
code = codeArray.join("");
return code
}


switch(process.argv[2]){
case "morse" :  console.log(computeMorse(process.argv[3], process.argv[4] )); break;
case "caeser" : console.log(computeCaeser(process.argv[3], process.argv[4] )); break;
default : console.log("Please use the format morse|caeser encode|decode string")
}
