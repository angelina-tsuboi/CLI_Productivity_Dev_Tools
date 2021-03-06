const inquirer = require('inquirer');
const clc = require('cli-color');
const terminalLink = require('terminal-link');

//HELPER METHODS
function toCommand(input){
    return input.toString().toUpperCase().trim();
}

  
var linksCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Quick Links Command 📟 : \n'
    }
  ];

var createCommand = [
{
    type: 'input',
    name: 'command',
    message: 'Enter Link 🔗 : \n'
}
];


var deleteCommand = [
    {
        type: 'input',
        name: 'command',
        message: 'Enter Item Index to Delete 🗑 : \n'
    }
];


class QuickLinks {
    links = []
    constructor(){
        this.links = [];
    }

    ask(){
        inquirer.prompt(linksCommand).then(answers => {
            let result = toCommand(answers.command);
            
            if(result != '' && result){
                if(result === "ADD") {
                    this.create();
                }

                if(result === "DELETE") {
                    this.delete();
                }

                if(result === "VIEW") {
                    this.view();
                }

                if(result === "HELP") {
                    this.help();
                }

                if(result === "QUIT") return;
            }else{
                console.log("Invalid Command")
            }
        });
    }

    create(){
        inquirer.prompt(createCommand).then(answers => {
            let result = answers.command;
            if(result != ''){
                this.links.push(result);
            }else{
                console.log("Invalid link")
            }
            this.ask();
        })
    }

    delete(){
        inquirer.prompt(deleteCommand).then(answers => {
            let result = parseInt(answers.command) - 1;
            if(this.links[result]){
                this.links.splice(result, 1);
            }else{
                console.log("Invalid Index")
            }
            this.ask();
        })
    }

    view(){
        for(let link of this.links){
            const linkSRC = terminalLink(link, link);
            console.log(linkSRC);
        }
        this.ask();
    }

    help(){
        console.log("COMMANDS");
        console.log("add: Add a Link");
        console.log("view: View Links");
        console.log("delete: Delete Links");
        console.log("help: More Info");
        console.log("quit: Quit Links");
    }
};

  module.exports = QuickLinks;