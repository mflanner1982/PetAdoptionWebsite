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

// ***************** Male Dog Button ***************
const DogArray = [
  {PetName: "Boris", Gender: "Male", Age: "Senior", Breed: "Laborador"}, 
  {PetName: "Lucy", Gender: "Female", Age: "Puppy", Breed: "Golden Retriever"}, 
]

const Result = DogArray.filter(MaleDogFunction);

function MaleDogFunction(DogArray)  // not sure what goes here
  {
    return Gender = "Male"; //where gender = male;
  }
// *************************************************-->
 // *************************************************-->
  var users = [
  {name: 'Boris', gender: 'Male', Age: 'Senior', Breed: 'Chocolate Laborador'},
  {name: 'Lucy', gender: 'Female', Age: 'Puppy', Breed: 'Golden Retriever'}];

  var query = {gender: "Male"};
  var result2 = users.filter(search, query); 
  var element = document.getElementById('result2');

  function search(user){
    return Object.keys(this).every((key) => user[key] === this[key]);
  } 

/*
function createMarkUp(data){
  Object.keys(query).forEach(function(key){
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(
    key.toUpperCase() + ': ' + result[0][key]));

    element.appendChild(p);
  });
}
let data = x; 
createMarkUp(result2);
*/
 // *************************************************-->
 // *************************************************-->
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
/*
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/
/*
  {PetName: "Daisy", Gender: "Female", Age: "Senior", Breed: "Golden Retriver"}, 
  {PetName: "Honey", Gender: "Female", Age: "Puppy", Breed: "Golden Retriever"}, 
  {PetName: "Harley", Gender: "Male", Age: "Senior", Breed: "Laborador"}, 
  {PetName: "Dolly", Gender: "Female", Age: "Puppy", Breed: "Golden Retriever"},
  {PetName: "Max", Gender: "Male", Age: "Senior", Breed: "Golden Retriever"}, 
  {PetName: "Birdie", Gender: "Female", Age: "Senior", Breed: "Pregnant Hog"} 
  */