import React from "react";


class UsersPage extends React.Component {

    constructor(props){
        super(props)
    }

render(){
    return(
        <h1>I am class component - {this.props.title}</h1>
    )
}
}

export default UsersPage