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

  activeList.forEach(element => {
    activeList.splice(0, 1);
  });
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

// Resets hider elements
var userReset;

function setInput(){
  if (userReset === "setName") {
    setName();
  }
  if (userReset === "setAllFeilds") {
    setAllFeilds();
  }
  console.log(userReset);
}

function setName() {
    $(".name").toggleClass("hider");
    $(".button").toggleClass("hider");
}

function setAllFeilds() {
  $(".name").toggleClass("hider");
  $(".officeNum").toggleClass("hider");
  $(".phoneNum").toggleClass("hider");
  $(".button").toggleClass("hider");
}



//
// PRINT EMPLOYEE LIST ROUTINE
//
function displayPrint() {

  setInput();
  userReset = "";

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
  setInput();
  userReset = "setName";
  setInput();

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
  
  setInput();
  userReset = "setName";
  setInput();

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

  setInput();
  userReset = "setName";
  setInput();

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

  setInput();
  userReset = "setAllFeilds";
  setInput();

  requiredAction = "updateUser";

}

function updateUser() {

  employeeList.forEach(element => {
    if (element.name == userIn.name){
      element.officeNum == userIn.officeNum;
      element.phoneNum = userIn.phoneNum;

      activeList.push(element.name);
      activeList.push(element.officeNum);
      activeList.push(element.phoneNum);

    }
  });

  renderElement();

}


//
// ADD LIST ROUTINE
//
function displayAdd() {

  setInput();
  userReset = "setAllFeilds";
  setInput();

  requiredAction = "addUser";
}

function addUser() {
  employeeList.push(userIn);
  console.log(employeeList);

  activeList.push(userIn.name);
  activeList.push(userIn.officeNum);
  activeList.push(userIn.phoneNum);

  renderElement();
}


//
// DELETE LIST ROUTINE
//
function displayDelete() {
  
  setInput();
  userReset = "setName";
  setInput();

  requiredAction = "deleteUser";
}

function deleteUser() {
  employeeList.forEach(element => {
    if (element.name === userIn.name){
      employeeList.splice(employeeList.indexOf(element), employeeList.indexOf(element) + 1); 
    
      activeList.push("Employee Deleted")
    }
  });

  console.log(employeeList);

  renderElement();
}

$("#Print").on('click', displayPrint);
$("#Verify").on('click', displayVerify);
$("#Lookup").on('click', displayLookup);
$("#Contains").on('click', displayContains);
$("#Update").on('click', displayUpdate);
$("#Add").on('click', displayAdd);
$("#Delete").on('click', displayDelete);

$(".button").on('click', submit);