
const fs = require ('fs')
const chalk = require('chalk')

const readNote=(title)=>{
    const notes = loadNotes()
    const note= notes.find((note)=>note.title===title)
    if (note) {
    console.log("title: ", note.title)
    console.log("body : ", note.body)
    } else{console.log("Note not found!")}
}

const listNotes =() =>{
     const notes = loadNotes()
     console.log("Your notes are : ")
     notes.forEach(note => {console.log(chalk.green(note.title))});
}

const addNotes =(title, body) => {
 const notes = loadNotes()
 const dupplicatenotes = notes.filter((note)=>note.title === title)
 debugger
    if(dupplicatenotes.length === 0) {
    notes.push({
        title: title, 
        body : body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen("New note added !"))}   
    else {
    console.log(chalk.bgRed("title is taken !"))
     }
}


const removeNote = function(title){
const notes = loadNotes()
const notesfiltre = notes.filter(function(note){
    return note.title !== title
})
if (notes.length===notesfiltre.length){
    console.log(chalk.bgRed.bold("il n y a pas de note avec ce titre"))
}else{
saveNotes(notesfiltre)
console.log(chalk.bgGreen.bold("la note a ete supprimé"))
}
}


const loadNotes = function (){
 try {
 const dataBuffer = fs.readFileSync("notes.json")
 const dataJson = dataBuffer.toString()
 return JSON.parse(dataJson)}
 catch(e) {
 return []
 }
}


const saveNotes = function(notes){
    const DataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',DataJson)
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote, 
    listNotes : listNotes,
    readNote : readNote

} 