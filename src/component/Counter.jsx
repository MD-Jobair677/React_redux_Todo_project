
import React from 'react';
import Menu from './Menu';
import { useState } from 'react';
const Counter =()=>{
   const [count, setCount] = useState(0);
    const hundeleIncrement = () => {
        setCount((count)=> count + 1);
        // This function will be called when the button is clicked
     
        console.log("Increment button clicked");
        // Here you can add logic to increment the count
    }



    return(
        <div className="counter">
        <Menu />
            <h1>Wellcome to counter App</h1>


            <p>Count: {count}</p>

            <button onClick={hundeleIncrement}> Incriment</button>


        </div>
          
    )
}

export default Counter;