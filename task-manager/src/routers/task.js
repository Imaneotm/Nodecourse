const express = require('express')
const Tasks = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req,res)=>{
    const task= new Tasks(req.body)
    try{
      await task.save()
      res.send(task)
    }catch(e){
      res.status(400).send(e)
    }
   
})

router.get('/tasks', async (req,res)=>{
  try{
    const tasks = await Tasks.find()
    res.send(tasks)
  }catch(e){
    res.status(500).send()
  }
  })
  
router.get('/tasks/:id', async(req,res)=>{
      const _id = req.params.id
      try{
       const task = await Tasks.findById(_id)
       if (!task){
                return res.status(404).send()
            }
            res.send(task)
      }catch(e){
        res.status(500).send()
      }
  })

router.patch('/tasks/:id', async(req,res)=>{
  const updates = Object.keys(req.body)
  const allowedUpdates = ['completed','description']
  const isValidOperation = updates.every((update)=>  allowedUpdates.includes(update))
  if(!isValidOperation){
    return res.status(400).send({error:'Invalid Updates !'})
  }
  
  try{
     const task = await Tasks.findById(req.params.id)
      updates.forEach((update)=>{
          task[update]=req.body[update]
      })
      task.save()
      if(!task){
        return res.status(404).send()
        }
     res.send(task)
  }catch(e){
      res.status(400).send(e)
  }
  })



router.delete('/tasks/:id', async(req,res)=>{
  try{
    const task= await Tasks.findByIdAndDelete(req.params.id)
    if(!task){
      res.status(404).send()
    }
    res.send(user)
  }catch(e){
    res.status(500).send(e)
  }
})


module.exports = router
