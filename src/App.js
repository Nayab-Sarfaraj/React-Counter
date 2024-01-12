import { useState } from "react";


function App() {
  const [counter,setCounter]=useState(0)
const increment=()=>{
 if(counter<Number.MAX_VALUE)
  setCounter(counter+1)
}
const decrement=()=>{
  if(counter>0)
  setCounter(counter-1)
}
const reset=()=>{
  setCounter(0)
}

  return (
    <div className="bg-slate-900 h-screen w-screen flex items-center justify-center text-[azure] ">
      <div>
        <h1 className=" text-6xl uppercase">Counter {counter}</h1>
        <div className="flex  items-center gap-5 mt-5  justify-center">
          <button className="bg-black px-2 py-1 rounded-md  hover:bg-slate-500 hover:text-black " onClick={increment}>Increment</button>
          <button className="bg-black px-2 py-1 rounded-md hover:bg-slate-500 hover:text-black " onClick={decrement}>Decrement</button>
        </div>
        <div className="text-center mt-5">
        <button className="bg-black px-2 py-1 rounded-md hover:bg-slate-500 hover:text-black " onClick={reset}>Reset</button>
        </div>
       
      </div>
    </div>
  );
}

export default App;
