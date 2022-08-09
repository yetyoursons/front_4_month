import React, {useState,useEffect} from 'react';

function Component1(props) {
    
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then (response => response.json())
            .then (data => setData (data))
    },[])

    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then (response => response.json())
            .then (data => setData (data))
    }
    

    
    return (
        <div>
            <ul>
                {data.map(data => <li key = {data.id} >{data.name}</li>)}
            </ul>   
        </div>
    );
}

export default Component1;