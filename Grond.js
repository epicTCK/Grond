String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}

function replace(wc) {
  var lastWC;

  while (true) {
    lastWC = wc;
    wc = wc.reverse();
    wc = wc.replace("§", "");
    wc = wc.replace("Ś", "");
    wc = wc.replace(/\(a(?!\w)/, "(trela"); //alert ,a
    wc = wc.replace(/\(f(?!\w)/, "(rof"); // for, f
    wc = wc.replace(/\(w(?!\w)/, "(elihw"); //while,w
    wc = wc.replace(/\(p(?!\w)/, "(tpmorp"); //prompt,p
    wc = wc.replace(/\(vr\./, "(esrever."); //reverse, rv
    wc = wc.replace(/\(tm\./, "(chtam."); // match, mt
    wc = wc.replace(/\(nj\./, "(nioj."); //join, .jn
    wc = wc.replace(/\(pr\./, "(ecalper."); //replace, .rp
    wc = wc.replace(/\(ls\./, "(.ecils"); //slice, sl
    wc = wc.replace(/\(lt\./, "(esaCrewoLot."); //toLowerCase, tl
    wc = wc.replace(/\(ut\./, "(esaCreppUot."); //toUpperCase, tu
    wc = wc.replace(/\(ps\./, "(tilps."); //split, sp
    wc = wc.reverse();
    wc = wc.replace(/\.l(?!\w)/, ".length"); // .length, .l
    if (lastWC === wc)
      break;
  }
  return wc;
}
var y = (a) => {
  for (let char in fullASCII) {
    if (!source.contains(char)) {
      source.replace(a, char);
    }
  }
}
var source = prompt("Enter Source");
var sourceCopy = source;


var fullASCII = ' !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.split('');

y('\\\"');
y("\\\'");
var sourceSplit = sourceCopy.split("\'");
for (let i = 0; i < sourceSplit.length; i += 2) {
  var o = sourceSplit[i].split('\"');
  for (let e = 0; e < o.length; e += 2) {
    o[e] = replace(o[e]);
  }
  sourceSplit[i] = o.join('\"');
}
sourceCopy = sourceSplit.join("\'");

var append = "if(s != \"\"){alert(s)}";
var prepend = "var s = prompt();";
var oSS = source.split('');
if (oSS[0] == "§") {
  prepend = "var s = \"\"";
}
if (oSS[0] == "Ś" || oSS[1] == "Ś") {
  prepend = "with(math){" + prepend;
  append += "}";
}

sourceCopy = prepend + " String.prototype.la=function(h){var x=this.split(''); x[h] = x[h].toLowerCase(); return x.join('');};String.prototype.ca=function(h){var x=this.split(''); x[h] = x[h].toUpperCase(); return x.join('');};String.prototype.reverse=function(){return this.split('').reverse().join('');}; \n var h = ['hello, world', 'Hello, World', 'Hello, World!', 'hello, world!', 'hello world', 'hello world!', 'Hello World', 'Hello World!', 'Hello, world.', 'Hello, World.' ,'hello world.' , 'Hello World.'];  var q ='" + source + "'; " + sourceCopy + append;
alert(sourceCopy);
eval(sourceCopy);
