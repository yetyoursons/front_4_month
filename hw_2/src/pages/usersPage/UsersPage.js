import React from 'react';
import UserList from '../../components/usersList/UsersList';

function UsersPage(props) {
    const user = {
        name: "Dastan",
        age: 12
    }
    return (
        <div>
            <UserList name = {user}/>
        </div>
    );
}

export default UsersPage;