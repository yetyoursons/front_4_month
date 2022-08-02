import React from 'react';

function UserList(props) {
    return (
        <div>
            <li>{props.name.name} - {props.name.age}</li>
            <li>Alan</li>
            <li>Aslan</li>
        </div>
    );
}

export default UserList;