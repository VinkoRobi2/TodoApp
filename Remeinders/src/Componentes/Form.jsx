
import { useState } from "react";
const Form = ({Add,HandleChange,input,input2,HandleChange2,tareas,texto})=>{
  
    return (
        <div className="max-w-md mx-auto mt-8">
          <form onSubmit={HandleChange} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item">
      Ingrese un valor:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="item"
      type="text"
      value={input}
      onChange={HandleChange}
      placeholder="Ingrese un valor"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otro">
      Otro campo:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="otro"
      type="text"
      value={input2}
      onChange={HandleChange2}
      placeholder="Otro campo"
    />
  </div>
  <div className="flex items-center justify-end">
    <button onClick={Add}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Agregar
    </button>
  </div>
</form>

          <ul className="list-disc list-inside">
          {tareas.map((item, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-12">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4">
                      <li className="text-white text-base " key={index}>{item} </li>
                      <p className="text-white text-base" key={index}>{texto[index]}</p>
                      
                    </div>
                  </div>
                ))} 

                
            </ul>
        </div>
      );
    };


export default Form