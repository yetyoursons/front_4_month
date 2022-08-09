import React from 'react';
import classes from './menu.module.css'
import {NavLink} from "react-router-dom"

function Menu(props) {
    return (
        <div>
            <li>
                <NavLink className={classes.link} to='/component1'>Component1</NavLink>
            </li>
            <li>
                <NavLink className={classes.link} to='/component2'>Component2</NavLink>
            </li>
            <li>
                <NavLink className={classes.link} to='/component3'>Component3</NavLink>
            </li>
            <li>
                <NavLink className={classes.link} to='/component4'>Component4</NavLink>
            </li>
        </div>
    );
}

export default Menu;