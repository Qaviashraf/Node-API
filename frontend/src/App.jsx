import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setname] = useState('')
  const [marks, setmarks] = useState('')
  axios.defaults.withCredentials = true ;
  // console.log(name+","+marks)
  const handleSubmit = (e) => {
    // e.prevent.Default();
    
    axios.post('https://node-api-back.vercel.app/student',{name,marks})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <>
      <div>
        <ul>
          <li>
            <p>Name</p>
            <input type="text" name="" id="" placeholder='Enter student name' onChange={(e)=>{setname(e.target.value)}}/>
          </li>
          <li>Marks</li>
          <input type="text" name="" id="" placeholder='Enter student marks' onChange={(e)=>{setmarks(e.target.value)}}/>
        </ul>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App
