// using this file is optional
// you can also load the code snippets in using your browser's console
//
 const main = document.getElementById('main')
 main.addEventListener('click', function(event){
   alert("I was clicked!");
 })

const input = document.querySelector('input')
input.addEventListener('keydown', function(event) {
  if (event.which === 71){
    return event.preventDefault()
  } else {
    console.log(event.which)
    console.log(event)
  }
})

let divs = document.querySelectorAll('div');
function bubble(event) {
  event.stopPropagation();
  console.log(this.firstChild.nodeValue.trim()+ ' bubbled here')
}

for (let i = 0; i <divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}

function capture(event) {
  console.log(this.firstChild.nodeValue.trim()+ ' captured here')
}

for (let i = 0; i <divs.length; i++) {
  divs[i].addEventListener('click', capture, true)
}
