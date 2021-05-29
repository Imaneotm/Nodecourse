require('../src/db/mongoose')
const Tasks = require ('../src/models/task')

// Tasks.findByIdAndDelete('60945d20712ced511854fa14').then(()=>{
//     return Tasks.find({completed:false})
// }).then((tasks)=>{
//     console.log(tasks)
// }).catch((e)=>{
//     console.log(e)
// })
 const deleteTaskAndCount = async(id) =>{

     const a = await Tasks.findByIdAndDelete(id)
     const b = await Tasks.countDocuments({completed:false})
    return b
 }
 deleteTaskAndCount('60a22e8396e1d560ccf887a7').then((count)=>{
  console.log(count)
 }).catch((e)=>{
   console.log(e)
 })