import React from 'react';

function MassiveCompHw({props}) {
    
    const users = ["Dastan", "Aman", "Aibek"]

    return (
        <div>
            <ul>
                    {users.map(user=> <li>{user}</li>)}
            </ul>
        </div>
    );
}

export default MassiveCompHw;