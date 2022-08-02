import React from 'react';
import classes from "./mainPage.module.css"

function MainPage(props) {
    
    const users = ["Dastan", "Aman", "Aibek"]
    
    return (
        <div>
            <h1 className={classes.title}>Main Page</h1>
            <ul>
                {users.map(user=> <li>{user}</li>)}
                {/* {users.map((user,key) => <li key ={key} user= {user}></li>)} */}
            </ul>
        </div>
    );
}

export default MainPage;