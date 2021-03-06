const inquirer = require('inquirer');
const clc = require('cli-color');
const CheckList = require('./checklist');
const Timer = require('./timer');
const QuickLinks = require('./quicklinks');
const Notes = require('./notes');
const Todo = require('./todo');
const Pomodoro = require('./pomodoro');

//init classes
let pomodoro = new Pomodoro();
let checklist = new CheckList();
let timer = new Timer();
let notes = new Notes();
let todos = new Todo();
let links = new QuickLinks();

var askCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Command 📟 : \n'
    }
  ];

function toCommand(input){
  return input.toString().toUpperCase().trim();
}

//MAIN COMMMANDS

function start(){
    console.log("Welcome to Productivity Dev Tools!");
    console.log("Type in \"help\" if you need to know the commands");
    ask();
}

function ask(){
    inquirer.prompt(askCommand).then(answers => {
        var command = toCommand(answers.command);
        if(command === "TODO" || command === "TODOLIST" || command === "TODOS") setTodos();
        if(command === "CHECKLIST" || command === "CHECK") checkList();
        if(command === "POMODORO" || command === "POM") setPomodoro();
        if(command === "NOTES" || command === "NOTE") setNotes();
        if(command === "HELP") getHelp();
        if(command === "LINKS" || command === "QUICKLINKS" || command === "LINK") setLinks();
        if(command === "TIMER") setTimer();
        if(command === "QUIT" || command === "EXIT") return;
    })   
}

//CHECKLIST COMMANDS
function checkList(){
  checklist.ask();
}


//TIMER
function setTimer(){
  timer.play();
}

// LINKS
function setLinks(){
  links.ask();
}

//NOTES
function setNotes(){
  notes.ask();
}

//TODO
function setTodos(){
  todos.ask();
}

//POMODORO
function setPomodoro(){
  pomodoro.ask();
}

// HELP
function getHelp(){
  console.log("COMMANDS:")
  console.log("check: Create a checklist for all of your tasks")
  console.log("todo:  Organize your project with a todo list")
  console.log("link: Get access to common links quickly ")
  console.log("timer: Manage your time effectively using a timer ")
  console.log("pom: Increase your productivity with a Pomodoro Timer ")
  console.log("note: Create notes for yourself in the console")
  console.log("exit: Quit the application")
}


// Process 
start();