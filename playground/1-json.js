const fs = require ('fs')
// const book = {
//     title : "Ego is the enemy", 
//     author : "Ryan Holiday"
// }
// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)
// // const parseData = JSON.parse(bookJSON)
// // console.log(parseData.title)
// // fs.writeFileSync('1-json.json',bookJSON)
// const databuffer =fs.readFileSync('1-json.json')
// const dataJson = databuffer.toString()
// const data = JSON.parse(dataJson)
const databuffer = fs.readFileSync("1-json.json")
console.log("buffer : ", databuffer)
const Datajson = databuffer.toString()
console.log("le buffer converti en string: ", Datajson)
const data = JSON.parse(Datajson)
console.log("la chaine de caractère converti en Json: ", data.age, " ", data.name, " ", data.planet)
data.name ="Imane"
data.age ="23"
console.log(" Le Json changé : ", data)
const dataup = JSON.stringify(data)
console.log(" le Json changé converti en string : ",dataup)
fs.writeFileSync("1-json.json",dataup)