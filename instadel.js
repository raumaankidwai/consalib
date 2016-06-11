// Instantly delete github repo. Use with caution.
// Two versions: ES5 compacted and ES6 compacted. Just waiting for ES6 to become the norm.

es5 = true;

if (es5) {
// ES5 compacted
(a=function(a){return document.getElementsByClassName(a)})("reponav-item")[6].click();(b=function(b){setTimeout(b,500)});b(function(){a("btn")[10].click();a("input-block")[2].value=a("public")[0].children[3].innerText;b(function(){a("btn")[12].click()})})
} else {
// ES6 compacted
(a=a=>document.getElementsByClassName(a))("reponav-item")[6].click();(b=b=>setTimeout(b,500))(c=>{a("btn")[10].click();a("input-block")[2].value=a("public")[0].children[3].innerText;b(b=>a("btn")[12].click())})
}
