import Form from './Componentes/Form'
import Task from './Componentes/Task'
import './App.css'

const App = ()=> {


  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-900 via-cyan-500 to-blue-500'>
      <h1 className='grid place-content-center text-white text-2xl '>Todo-App</h1>
      <Form />
    </div>
  )
}

export default App
