console.log("Inside jsdom.css!");
hello();

document.onload = function(){
    //All JS DOM code should go inside this function
    //Any function can be written outside this area        
}

function hello()
{
    console.log("hello");
}
//-- *********** Change Message Button ************* -->
function myFunction() {
  document.getElementById("demo").innerHTML = "Button is working"; 
}
//-- ************************************************ -->

  "use strict";

function newEl(tag) {
  return document.createElement(tag)
}

function byId(id) {
  return document.getElementById(id)
}

window.addEventListener('load', onLoaded, false);

class dogT {
  constructor(name = null, gender = null, age = null, breed = null, link = null) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.breed = breed;
    this.link = link;
  }
}

const dogArray = [
  
  new dogT('Boris', 'Male', 'Senior', 'Labrador', 'Boris.html'),
  new dogT('Lucy', 'Female', 'Puppy', 'Golden Retriever', 'Lucy.html'),
  new dogT('Daisy', 'Female', 'Senior', 'Golden Retriever', 'Daisy.html'), 
  new dogT('Honey', 'Female', 'Puppy', 'Golden Retriever', 'Honey.html'), 
  new dogT('Harley', 'Male', 'Senior', 'Labrador', 'Haryley.html'), 
  new dogT('Dolly', 'Female', 'Puppy', 'Golden Retriever', 'Dolly.html'),
  new dogT('Max', 'Male', 'Senior', 'Golden Retriever', 'Max.html'), 
  new dogT('Birdie', 'Female', 'Senior', 'Pregnant Hog', 'Birdie.html') 
];

function onLoaded(evt) {
  byId('allBtn').addEventListener('click', showAll, false);
  byId('fBtn').addEventListener('click', showFemale, false);
  byId('mBtn').addEventListener('click', showMale, false);
}
function showAll(evt) {
  showDogArray(dogArray);
}

function showMale(evt) {
  let inputArray = dogArray.filter((curDog) => curDog.gender == 'Male');
  showDogArray(inputArray);
}

function showFemale(evt) {
  let inputArray = dogArray.filter((curDog) => curDog.gender == 'Female');
  showDogArray(inputArray);
}

function showDogArray(inputArray) {
  let tgt = byId('output');
  tgt.innerHTML = '';

  inputArray.forEach(
    curDog => {
      let container = newEl('div');

      let keys = Object.keys(curDog);
      keys.forEach(
        curKey => {
          let div = newEl('div');
          div.textContent = curDog[curKey];
          container.appendChild(div);
        }
      );
      tgt.appendChild(container);
    }
  )
}