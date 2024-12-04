
import React, { useState } from 'react'
import './App.css';
// import Button from './components/sharonindustry/Button';
 // task demo______________________________________________________________
// import Navbar from "./components/sample/Navbar.jsx"
// import Hero from "./components/sample/Hero.jsx"

 // task 1 _____________________________________________________________________________________

// import Block from './components/task1/Block.jsx';

  // task sharon industry____________________________________

  // import Navbar from './components/sharonindustry/Navbar';
  // import Homepage from './components/sharonindustry/Homepage';
  // import About from './components/sharonindustry/About';
  // import Contact from './components/sharonindustry/Contact';
  // import {
  //   BrowserRouter,
  //   Route,
  //   Routes,
  // } from "react-router-dom";

  // task 3...............................................................................

// import Button from './components/task3/Button';

  
function App() {

//   task3 sub1
const[num  , setnum] = useState(0)
const[a ,  seta]  = useState("hey")

  return (

// task3 sub2
    

    // task demo______________________________________________________________
    // <div className='h-screen bg-[url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg)] bg-black bg-opacity-75 bg bg-blend-darken'>
    // <Navbar/>
    // <Hero/>

    // </div>

    // task 1 _____________________________________________________________________________________

    // <Block/>

    // task sharon industry ;;; task 2  _________________________________________________________________________
    // <div>
    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    // <Route path="/" element={<Homepage/>} />
    // <Route path="/about" element={<About/>} />
    // <Route path="/contact" element={<Contact/>}/>
    
    // </Routes>
    // </BrowserRouter>
    
    // </div>

    // task 3   sub 1.......................................................................................
/* <div className='flex'>
  <div >
   
    <button className='border-2 w-20' onClick={()=>{
      setnum(num+1)
    }}>increment</button> <br/><br/>
    <button className='border-2 w-20' onClick={()=>{
      setnum(num-1)
    }}>decrement</button>
    </div>
    <div className='m-10'>{num}</div>
    </div> */
    
    // task3 sub2
   <div>
    <svg  xmlns="http://www.w3.org/2000/svg" fill= {num===1? "red":"none"} viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
 />

</svg>
<button  className='border-2 w-20' onClick={()=>{
  if(num ===0){
  setnum(1)
  }
  else{
    setnum(0)
  }}}>like/dislike</button> {num}<br/><br/><br/><br/>



 <br/> <button   className='border-2 w-20' onClick={()=>{
  seta( prompt("enter the changing heading"))
}}>change </button>
<br/>
{a}

<br/><br/><br/>
<button className='border-2 w-20'  onClick={()=>{
  
}
}>change mode</button>

   </div>
  )


}

export default App;
