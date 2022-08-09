import React, { useState } from "react";

function StatusUserPage(props) {

    const [user, setUser] = useState({
        name:"",
        lastName:"",
        gender:"",
        status:""
    });


    const ChangeInput = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })

    }

    const cleanInput = () => {
        setUser(prev => {
            return {
                ...prev,
                name:"",
                lastName:"",
                gender:"",
                status:""
            }
        })
    }

    const submit = (e) => {
        e.preventDefault()
        alert("Данные успешно отправлены")
        console.log(user)
        cleanInput()
    }


    return (


        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={ChangeInput}
                />

                <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={ChangeInput}
                />

                <input
                    type="text"
                    placeholder="Your Gender"
                    name="gender"
                    list="genders"
                    value={user.gender}
                    onChange={ChangeInput}
                />
                    <datalist id="genders">
                        <option value="Male"/>
                        <option value="Female"/>
                    </datalist>

                    <input
                    type="text"
                    placeholder="Marital Status"
                    name="status"
                    list="status"
                    value={user.status}
                    onChange={ChangeInput}
                />
                    <datalist id="status">
                        <option value="Single"/>
                        <option value="Married"/>
                    </datalist>



                <button type="submit">Register User</button>
            </form>

        </div>
    );
}

export default StatusUserPage;