const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const activeList = [];

const clicked = (event) => {
  event.preventDefault();
  // create a const that stores the id of the event.target (what you clicked on)
  const whatIdWasClicked = event.target.id;
  // compare the id of what what clicked on, with the id you need or 
  //want to tie a function to
  if( whatIdWasClicked ==="newAButton"){
      // This is where you can execute the operations/functions you need
      // or want to happen from clicking on your new button
      console.log("You just clicked on a dynamically made button. ")
      
      
  }
  
  // this else statement is NOT needed and is only placed here to show
  // what is happening when we click on .container
  else {
      console.log("You are clicking everywhere else but the button.")
  }
};
const forFxn = (event) => { 
  // prevent the button from refreshing the page 
  event.preventDefault()
  
  // append a new button to your .container
  $(".container").append(`<button id = "newAButton"> The NEW Button </button>`);
  
}


function renderElement (){
  $("#display-board").empty();
  for(let i = 0; i < activeList.length; i++){
      $("#display-board").append("<div>" + activeList[i] + "</div>")
  }
  console.log(activeList);
}

function printUser() {
  employeeList.forEach(element => {
    activeList.push(element.name);
    activeList.push(element.officeNum);
    activeList.push(element.phoneNum);
  });

  renderElement();
}

function verifyUser(){

  $("#input").append("<form><input type=\"text\" id=\"search-input\" placeholder=\"Employee Name\" autocomplete=\"off\" />"
  + "<button id=\"search\">Search</button></form>");
  $("search").on('click', verifySubRoutine);
}

function verifySubRoutine() {
  event.preventDefault();
  const empName = $("#search-input").val;
  var found = "Employee Not Found";

  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name == empName){
      found = "Employee Found";     
    }
  }

  activeList.push(found);
  render();
}

function lookupUser(){
  const empName = prompt("Name to lookup");
  
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name == empName){
      activeList.push(employeeList[i].name);
      activeList.push(employeeList[i].officeNum);
      activeList.push(employeeList[i].phoneNum);
    }
  }
}

function containsUser(){
  const userString = prompt("String to include");

  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name.contains(userString)){
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

function updateUser(){
  const empName = prompt("Employee Name");  
  const feild = prompt("What would you like to update: 1. name , 2. office number, 3. phone number");
  const change = prompt("new info");

  if (feild == 1){
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === empName){
        employeeList[i].name = change;
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  } else if (feild == 2) {
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === empName){
        employeeList[i].officeNum = change;
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  } else if (feild == 3) {
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === empName){
        employeeList[i].feild = change;
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  }
}

function addUser() {
  const empName = prompt("new empoyee name");
  const empOffice = prompt("new empoyee office number");
  const empPhone = prompt("new empoyee phone number");

  employeeList.push(name, officeNum, phoneNum);

  printUser();
}

function deleteUser(){
  const empName = prompt("empoyee name");

  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name === empName){
      employeeList.splice(index, 1);
    }
  }

  printUser();
}

$("#Print").on('click', printUser);
$("#Verify").on('click', verifyUser);
$("#Lookup").on('click', lookupUser);
$("#Contains").on('click', containsUser);
$("#Update").on('click', updateUser);
$("#Add").on('click', addUser);
$("#Delete").on('click', deleteUser);

$("#add").on("click", forFxn)
$("#search").on("click", clicked)