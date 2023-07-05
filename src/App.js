import './App.css';
import {useState} from 'react'
function App() {
  const [count , setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>Increment & Decrement</div>
      <div className='bg-white flex justify-center  gap-12 py-3 rounded-xl text-[35px] text-[#344151]'>
        <button onClick = {decreaseHandler} className='border-r-2 text-center w-20  text-9pxl border-[#ac0f0f]'>-</button>
        <div className='font-bold  text-5pxl'>{count}</div>
        <button onClick = {increaseHandler} className='border-l-2 text-center w-20 border-[#ac0f0f] text-5pxl'>+</button>
      </div>
      <button onClick = {resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-xl border-2 border-[#cc6a6a] text-lg'>Reset</button>
    </div>
  );
}

export default App;
