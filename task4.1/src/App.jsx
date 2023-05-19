import './app.css'

import { useEffect, useState } from "react";



function App() {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Rendering');
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='main_div'>


        <h1>Show/Hide</h1>
        <input type="checkbox" id="switch"
                    className="checkbox" />
        <label onClick={()=>setToggle(!toggle)} htmlFor="switch" className="toggle">

          {toggle && <div className='wlcm_div'><title>Welcome</title></div>}
             
 

 
 
        </label>
    
    </div>

  )
  }

export default App;
