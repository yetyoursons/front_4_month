import React, { useEffect, useState } from 'react';

function UsersPage(props) {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then (response => response.json())
            .then (data => setUsers (data))
    },[])
// , [] нужен для того что бы массив не работал в бесконечном цикле


    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then (response => response.json())
            .then (data => setUsers (data))
    }


    return (
        <div>
           <button onClick={getUsers}> Get Users</button>
           <ul>
                {users.map (user => <li key={user.id}>{user.name}</li>)}
           </ul> 
        </div>
    );
}

export default UsersPage;