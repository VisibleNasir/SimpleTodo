import express from 'express';
import todo from './db.js';
import {createTodo, updateTodo} from './types.js';
const app = express();
const port = 3000;

import cors from 'cors';

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/todos' , async (req , res)=>{
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(400).json({
      msg:"You sent the wrong inputs",
    })
    return ;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    msg:"Todo created successfully"
  })
})

app.get('/todo',async (req , res)=>{
  const todos = await todo.find();
  res.json({
    todos,
  })
})

app.put ('/completed' ,async (req , res)=>{
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(400).json({
      msg:"You sent the wrong inputs",
    })
    return;
  }
  await todo.update({
    _id:req.body.id
  },{
    completed:true
  })
  res.json({
    msg:"Todo marked as completed"
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});