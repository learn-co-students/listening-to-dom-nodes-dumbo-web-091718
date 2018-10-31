// using this file is optional
// you can also load the code snippets in using your browser's console
const input = document.querySelector('input');
undefined
input.addEventListener('keydown', function(e) {
    if (e.which === 71) {
        return e.preventDefault(); } else {
            console.log(e.which)}});
undefined
VM710:4 83
2VM710:4 75
VM710:4 78
VM710:4 68
VM710:4 75
VM710:4 77
VM710:4 67
VM710:4 75
VM710:4 77
VM710:4 67
VM710:4 75
VM710:4 77
VM710:4 78
VM710:4 75
VM710:4 78
VM710:4 75
VM710:4 83
let divs = document.querySelectorAll('div');
undefined
function bubble(e){
    console.log(this.firstChild.nodeValue.trim() + 'bubbled');}
undefined
for (let i = 0, i < divs.length; i++){
VM984:1 Uncaught SyntaxError: Unexpected token <
divs[i].addEventListener('click', bubble);}
VM1051:1 Uncaught SyntaxError: Unexpected token }
for (let i = 0, i < divs.length; i++){
divs[i].addEventListener('click', bubble);}
VM1055:1 Uncaught SyntaxError: Unexpected token <
for (let i = 0, i<divs.length; i++){divs[i].addEventListener('click', bubble);}
VM1064:1 Uncaught SyntaxError: Unexpected token <
for (let i = 0; i<divs.length; i++){divs[i].addEventListener('click', bubble);}
undefined
VM929:2 5bubbled
VM929:2 4bubbled
VM929:2 3bubbled
VM929:2 2bubbled
VM929:2 1bubbled
VM929:2 5bubbled
VM929:2 4bubbled
VM929:2 3bubbled
VM929:2 2bubbled
VM929:2 1bubbled
VM929:2 5bubbled
VM929:2 4bubbled
VM929:2 3bubbled
VM929:2 2bubbled
VM929:2 1bubbled
VM929:2 4bubbled
VM929:2 3bubbled
VM929:2 2bubbled
VM929:2 1bubbled
VM929:2 3bubbled
VM929:2 2bubbled
VM929:2 1bubbled
VM929:2 2bubbled
2VM929:2 1bubbled
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}
undefined
VM1085:4 1 captured
VM1085:4 2 captured
VM1085:4 3 captured
VM1085:4 4 captured
VM929:2 5bubbled
VM1085:4 5 captured
VM929:2 4bubbled
VM929:2 3bubbled
VM929:2 2bubbled
VM929:2 1bubbled
const divs = document.querySelectorAll('div');

function bubble(e) {
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
VM1099:1 Uncaught SyntaxError: Identifier 'divs' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM1099:1


function bubble(e) {
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
undefined
VM1085:4 1 captured
VM1085:4 2 captured
VM1085:4 3 captured
VM929:2 4bubbled
VM1085:4 4 captured
VM1102:6 4 bubbled
VM1085:4 1 captured
VM1085:4 2 captured
VM929:2 3bubbled
VM1085:4 3 captured
VM1102:6 3 bubbled
VM929:2 1bubbled
VM1085:4 1 captured
VM1102:6 1 bubbled
