import React, { useState,useEffect } from 'react';


function CountPage(props) {
    const [count,setCount] = useState(0);

    useEffect( () => {
        console.log(count)
        document.title = `You pressed ${count} times`
    },[])

    const increment =() => {
        setCount(count +1)
    }

    const decrease = () => {
        setCount(count -1)
        console.log(count)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default CountPage; 