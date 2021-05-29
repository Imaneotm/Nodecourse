const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {useNewUrlParser:true, useCreateIndex: true})


// const me = new User ({
//     name : '    Mohamed  ',
//     age : 23,
//     email : ' gm_yahi@esi.dz  ',
//     password : ' 123password '
// })
 
// me.save().then(()=>{
//   console.log(me)
//  }).catch((error)=>{
// console.log("Error!", error)
//  })
// const Tasks = mongoose.model('Tasks', {
//     description : { type : String, required : true, trim: true},
//     completed : { type : Boolean, default :false}
// })
// const task = new Tasks({
//     description : 'Faire le ménage',
//     completed : false
// })
//  task.save().then(()=>{ console.log(task)}).catch((error)=>{ console.log('Error!', error)})