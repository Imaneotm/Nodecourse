const chalk = require('chalk')
const { demandOption, string } = require('yargs')
const yargs = require('yargs')
const notes = require ('./notes.js')
// console.log(chalk.bold.green('Success !'))
yargs.version('1.1.0')
// console.log(yargs.argv)

//Creat add command
yargs.command ({
    command: 'add', 
    describe: 'Add a new note', 
    builder : {
       title : {
           describe: 'Note Title',
           demandOption: true,
           type : 'string'
       },
       body : {
        describe: 'Note Body',
        demandOption: true,
        type : 'string'
       }
    },
    handler :(argv) => {
        notes.addNotes(argv.title, argv.body)
    }



}).command({
    command: 'remove', 
    describe: 'Remove a note', 
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }   
    },
    handler :(argv)=> {
        notes.removeNote(argv.title)
    }



}).command ({
    command: 'list', 
    describe: 'list all notes', 
    handler : () => {
        notes.listNotes();
    }



}).command ({
    command: 'read', 
    describe: 'Read a note', 
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }   
    },
    handler : (argv) => {
        notes.readNote(argv.title)
    }
}).parse()