import React from "react";
import Header from "../../components/header/Header";
// Классовый компонет конструктор без rsf
class NewsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menu: false
        }
    }
// this is method
    changeTitle = () => {
        this.setState({
            title: this.state.title = "I am new title!"
        })
    }

    changeMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.menu === true ? <Header/> : ""
                    // this.state.menu && <Header/>
                }
                <Header/>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeMenu}>menu</button>
                <button onClick={this.changeTitle}>change text</button>
            </div>
        )
    }
}

export default NewsPage;