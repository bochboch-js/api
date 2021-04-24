import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [todos,setTodos] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setTodos(json))
  },[])

  
  return (
    <div className="App">
      <ul> 
      {
        todos.map(item=><li>{item.title}</li>)
      }  
      </ul> 
    </div>
  );
}

export default App;
