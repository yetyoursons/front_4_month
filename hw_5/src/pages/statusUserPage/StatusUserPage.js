import React from "react";

class StatusUserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                name: "",
                lastname: "",
                gender: "",
                status: ""
            }
        }
    }

    changeInput = (e) => {
        this.setState({input:e.target.value});
        console.log(e.target.name)
        
        this.setState({
            data:{
                ...this.state.data,
                [e.target.name] : e.target.value
            }
            }
        )
    }


    submitData = () => {
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <h1>Статус Пользователя</h1>
                    <input 
                        type = "text"
                        placeholder="name"
                        onChange={this.changeInput}
                        name = "name"    
                    />
                    <input 
                        type = "text"
                        placeholder="lastname"
                        onChange={this.changeInput}
                        name = "lastname"
                        
                    />
                    <input 
                        type = "text"
                        placeholder="your gender"
                        list="genders"
                        name = "gender"
                        onChange={this.changeInput}/>
                        
                    <datalist id="genders">
                            <option value="Женский" />
                            <option value="Мужской" />
                    </datalist>
                    <input
                        type = "text"
                        placeholder="Marital Status"
                        list="maritalStatus"
                        name = "status"
                        onChange={this.changeInput}/>
                    <datalist id="maritalStatus">
                            <option value="Maried"/>
                            <option value="Single"/>
                    </datalist>
                    <button onClick={this.submitData}>Submit Data</button>
            </div>
        );
    }
}
export default StatusUserPage;