import { Input } from "postcss";
import { useState } from "react";
const Form = ()=>{
    const [inputv,setinputv] = useState('')
    const [input2,setinputv2] = useState('')
    const [text,settext] = useState("")
    const [items, setItems] = useState([]);
    const HandleSubmit = ({target})=>{
     setinputv(target.value)
    }
    const HandleSubmit2 = ({target})=>{
      setinputv2(target.value)
    }
    const HandleAdd = (e) => {
      e.preventDefault();
      if (inputv.trim() !== '' && input2.trim() !== '') {
        setItems([...items, inputv]);
        settext([...text, input2]);
        setinputv('');
        setinputv2('');
      } else {
        alert('Por favor ingrese valores en ambos campos');
      }
    };
    return (
        <div className="max-w-md mx-auto mt-8">
          <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item">
      Ingrese un valor:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="item"
      type="text"
      value={inputv}
      onChange={HandleSubmit}
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
      onChange={HandleSubmit2}
      placeholder="Otro campo"
    />
  </div>
  <div className="flex items-center justify-end">
    <button onClick={HandleAdd}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Agregar
    </button>
  </div>
</form>

          <ul className="list-disc list-inside">
                {items.map((item, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-12">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4">
                      <li className="text-white text-base " key={index}>{item} </li>
                      <p className="text-white text-base" key={index}>{text[index]}</p>
                      
                    </div>
                  </div>
                ))}
            </ul>
        </div>
      );
    };


export default Form