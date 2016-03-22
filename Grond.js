String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}
var source = prompt("Enter Source");
var wc = source; // wc stands for working copy 
var lastWC;
while (true) {
  lastWC = wc;
  wc = wc.reverse();
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
    wc = wc.replace(/\(ps\./, "(.tilps"); //split, sp
  wc = wc.reverse();
  wc = wc.replace(/\.l(?!\w)/, ".length"); // .length, .l
  if (lastWC === wc)
    break;
}

// quine builtin commented out because it messes things up TODO: Fix it. 
wc = " String.prototype.la=function(h){var x=this.split(''); x[h] = x[h].toLowerCase(); return x.join('');}String.prototype.ca=function(h){var x=this.split(''); x[h] = x[h].toUpperCase(); return x.join('');}String.prototype.reverse=function(){return this.split('').reverse().join('');} \n var h = ['hello, world', 'Hello, World', 'Hello, World!', 'hello, world!', 'hello world', 'hello world!', 'Hello World', 'Hello World!', 'Hello, world.', 'Hello, World.' ,'hello world.' , 'Hello World.']; /* var q ='" + source + "';*/ " + wc;

eval(wc);
