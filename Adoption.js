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

function myFunction() {
  document.getElementById("demo").innerHTML = "Button is working"; 
}

const DogArray = [
  {Name: "Boris", Gender: "Male", Age: "Senior", Breed: "Laborador"}, 
  {Name: "Lucy", Gender: "Female", Age: "Puppy", Breed: "Golden Retriever"}, 
  {Name: "Daisy", Gender: "Female", Age: "Senior", Breed: "Golden Retriver"}, 
  {Name: "Honey", Gender: "Female", Age: "Puppy", Breed: "Golden Retriever"}, 
  {Name: "Harley", Gender: "Male", Age: "Senior", Breed: "Laborador"}, 
  {Name: "Dolly", Gender: "Female", Age: "Puppy", Breed: "Golden Retriever"},
  {Name: "Max", Gender: "Male", Age: "Senior", Breed: "Golden Retriever"}, 
  {Name: "Birdie", Gender: "Female", Age: "Senior", Breed: "Pregnant Hog"} 
]
const MaleDogs = DogArray.filter(MaleDogFunction);

  function MaleDogFunction(DogArray)  // not sure what goes here
  {
    return DogArray; //where gender = male

  }

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