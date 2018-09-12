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

const userIn = {
  name: 0 ,
  officeNum: 0 ,
  phoneNum: 0
}

var requiredAction;


//
// UNIVERSAL CALLS
//
function renderElement (){
  $("#display-board").empty();
  for(let i = 0; i < activeList.length; i++){
      $("#display-board").append("<div>" + activeList[i] + "</div>")
  }
  console.log(activeList);
}

function submit() {
  event.preventDefault();

  //if elements are filled in the userIn object takes the values
  if ($(".name").val() !== undefined){
    userIn.name = $(".name").val();
  }
  if ($(".name").val() !== undefined){
    userIn.officeNum = $(".officeNum").val();
  }
  if ($(".name").val() !== undefined){
    userIn.phoneNum = $(".phoneNum").val();
  }

  //debug
  console.log(employeeList);
  console.log(userIn);

  //determines which action is required (print not needed as no user input)
  switch (requiredAction) {
    case "verifyUser":
      verifyUser();
      break;

    case "lookupUser":
      lookupUser();
      break;

    case "containsUser":
      containsUser();
      break;

    case "updateUser":
      updateUser();
      break;

     case "addUser":
      addUser();
      break;

    case "deleteUser":
      deleteUser();
      break;
  }
}



//
// PRINT EMPLOYEE LIST ROUTINE
//
function displayPrint() {
  employeeList.forEach(element => {
    activeList.push(element.name);
    activeList.push(element.officeNum);
    activeList.push(element.phoneNum);
  });

  renderElement();
}


//
// VERIFY EMPLOYEE LIST ROUTINE
//
function displayVerify(){
  event.preventDefault();

  //reveal name and button
  $(".name").toggleClass("hider");
  $(".button").toggleClass("hider");

  //sets submit button to verify
  requiredAction = "verifyUser";
}

function verifyUser() {
  event.preventDefault();


  var found = "Employee Not Found"
  employeeList.forEach(element => {
    if (element.name === userIn.name){
      found = "Employee Found";
    }
  });
  
  activeList.push(found);
  renderElement();

  //$(".name").toggleClass("hider");
  //$(".button").toggleClass("hider");
}


//
// LOOKUP LIST ROUTINE
//
function displayLookup(){
  

  $(".name").toggleClass("hider");
  $(".button").toggleClass("hider");

  requiredAction = "lookupUser";
}

function lookupUser() {
  employeeList.forEach(element => {
    if (element.name == userIn.name){
      activeList.push(element.name);
      activeList.push(element.officeNum);
      activeList.push(element.phoneNum);
    }
  });

  renderElement();
}


//
// Contains List Routine
//
function displayContains(){

  $(".name").toggleClass("hider");
  $(".button").toggleClass("hider");

  requiredAction = "containsUser";
}

function containsUser() {
  employeeList.forEach(element => {
    if (element.name.includes(userIn.name)){
      activeList.push(element.name);
      activeList.push(element.officeNum);
      activeList.push(element.phoneNum);
    }
  });

  renderElement();
}


//
// Update List Routine
//
function displayUpdate(){

  $(".name").toggleClass("hider");
  $(".officeNum").toggleClass("hider");
  $(".phoneNum").toggleClass("hider");
  $(".button").toggleClass("hider");

  requiredAction = "containsUser";

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

function updateUser() {

  var nameAnchor;

  employeeList.forEach(element => {
    if (element.name == userIn.name){
      nameAnchor = element.name;
    }
  });

  

}

function displayAdd() {
  const empName = prompt("new empoyee name");
  const empOffice = prompt("new empoyee office number");
  const empPhone = prompt("new empoyee phone number");

  employeeList.push(name, officeNum, phoneNum);

  printUser();
}

function displayDelete(){
  const empName = prompt("empoyee name");

  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name === empName){
      employeeList.splice(index, 1);
    }
  }

  printUser();
}

$("#Print").on('click', displayPrint);
$("#Verify").on('click', displayVerify);
$("#Lookup").on('click', displayLookup);
$("#Contains").on('click', displayContains);
$("#Update").on('click', displayUpdate);
$("#Add").on('click', displayAdd);
$("#Delete").on('click', displayDelete);

$(".button").on('click', submit);