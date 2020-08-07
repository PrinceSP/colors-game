console.log('connected....');
let header = document.querySelector('header');
let span = document.querySelectorAll('span');
let btnHover = document.querySelector('.lvl').children;
let boxes = document.querySelectorAll('.child-box');
let newColor = document.querySelector('.menu').firstElementChild;
let answer = document.querySelector('.answer');
let runNum = new Array();
let ranNum = new Array();
console.log(newColor);
for (let i in span){
  runNum[i]=Math.floor((Math.random()*255)+1);
  header.style.background = `rgb(59, 138, 249)`;
  span[i].textContent = `${runNum[i]}`;
}

for (let j = 0; j < btnHover.length; j++) {
  btnHover[j].addEventListener('click',()=>{
    btnHover[j].style.background = `rgb(${runNum[0]},${runNum[1]},${runNum[2]})`;
    btnHover[j+1].style.background = `none`;
    for (var i = 0; i < boxes.length-3; i++) {
      boxes[i].style.display = "none";
      randomColors();
    }
  });

  btnHover[1].addEventListener('click',()=>{
    btnHover[j].style.background = `none`;
    btnHover[1].style.background = `rgb(${runNum[0]},${runNum[1]},${runNum[2]})`;
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.display = "block";
      randomColors();
    }
  });
}

for (let k = 0; k < boxes.length; k++) {
    colors();

    boxes[k].addEventListener('click',()=>{
      if (boxes[k]===boxes[0]) {
        answer.textContent = 'correct!';
        header.style.background = `rgb(${runNum[0]},${runNum[1]},${runNum[2]})`;
        boxes[k].style.background = changes();
      } else{
        answer.textContent = 'try again!';
        boxes[k].style.background = "none";
        boxes[k].style.transition = "background 500ms ease-in-out";
      }
    });
}

newColor.addEventListener('click',()=>{
  randomColors();
  answer.textContent = "";
});


function randomColors(){
  for (var i = 0; i < boxes.length; i++) {
    ranNum[i] = Math.floor(Math.random()*360);
    boxes[i].style.background = `hsl(${ranNum[i]},70%,50%)`;
  }
}

function colors(){
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = `rgb(${runNum[0]},${runNum[1]},${runNum[2]})`;
    boxes[1].style.background = `rgb(${runNum[1]},${runNum[2]},${runNum[0]})`;
    boxes[2].style.background = `rgb(${runNum[2]},${runNum[1]},${runNum[0]})`;
    boxes[3].style.background = `rgb(${runNum[1]},${runNum[2]},${runNum[1]})`;
    boxes[4].style.background = `rgb(${runNum[1]},${runNum[0]},${runNum[1]})`;
    boxes[5].style.background = `rgb(${runNum[1]},${runNum[2]},${runNum[2]})`;
  }
}

function changes(){
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = `rgb(${runNum[0]},${runNum[1]},${runNum[2]})`;
  }
}
