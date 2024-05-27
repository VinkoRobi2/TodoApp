import Form from './Componentes/Form'
import Task from './Componentes/Task'
import './App.css'
import { useState } from 'react'

const App = ()=> {
const [input,setInput] = useState("")
const [input2,setInput2] = useState("")
const [texto,settexto] = useState("")
const [tareas,setTarea] = useState([])
const HandleChange = ({target})=>{
  setInput(target.value)
}
const HandleChange2 = ({target})=>{
  setInput2(target.value)
}
const Add = (e)=>{
 e.preventDefault()
 if(input.trim() !== "" && input2.trim() !== ""){
  setTarea([...tareas,input])
  settexto([...texto,input2])
  setInput2("")
  setInput("")
 }
 
}

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-900 via-cyan-500 to-blue-500'>
      <h1 className='grid place-content-center text-white text-2xl '>Todo-App</h1>
      <Form  HandleChange = {HandleChange} Add = {Add} input = {input} input2 = {input2} HandleChange2={HandleChange2} tareas={tareas} texto = {texto}/>
    </div>
  )
}

export default App
