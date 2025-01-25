import { useState , useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , SetLength] = useState(8);
  const [number , setnumber] = useState(false);
  const [char , SetChar] = useState(false);
  const [password , setPassword] = useState('');


  const passwordGenrator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if(number){
      str += "0123456789";
    }
    if(char){
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() *str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  } , [length , number , char, setPassword])

  useEffect(() => {
    passwordGenrator();
  } , [length , number , char , passwordGenrator]);

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password genrator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">Test </div>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 mx-10">
        <input type="text" 
        value={password}
        className='outline-none w-full p-4 bg-gray-800 text-white'
        placeholder='
        Password'
        readOnly
        />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>


        <div className="flex text-sm gap-x-1">
          <div className="flex item-center gap-x-1">
            <input type="range" 
              min={6}
              max={100}
              value ={length}
              className='cursor-pointer'
              onChange={(e) => SetLength(e.target.value)}
            />
            <label htmlFor="" className='text-orange-500 bg-gray-700'>Length :{length}</label>

          </div>

          <div className="flex item-center gap-x-1">
            <input type="checkbox" 
              onChange={(e) => setnumber(prev => !prev)}
            />
            <label htmlFor="" className='text-orange-500 bg-gray-700'>Number</label>
            
          </div>

          <div className="flex item-center gap-x-1">
            <input type="checkbox" 
              onChange={(e) => SetChar((prev) => !prev)}
            />
            <label htmlFor="" className='text-orange-500 bg-gray-700'>Char</label>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default App
