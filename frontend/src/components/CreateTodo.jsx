
import { React,  useState } from 'react'
const CreateTodo = () => {
  const [title , setTiitle] = useState("");
  const [description , setDescription] = useState("");
  return (
    <div>
      <input id="title" type="text" placeholder='title' onChange={function(e){
        const value = e.target.value;
      }}/> <br />
      <input type="text" placeholder='description'/> <br />

      <button onClick={() =>{
        fetch('http://localhost:3000/todo',{
          method:"POST",
          body:JSON.stringify({
            title: title,
            description:description
          }),
          headers:{
            'Content-Type': 'application/json'
          }
          
        })
          .then(async function (res) {
            const json = await res.json();
            console.log(json)
            alert("Todo Added");
          })
          
      }}>Add a todo</button>
    </div>
  )
}

export default CreateTodo
