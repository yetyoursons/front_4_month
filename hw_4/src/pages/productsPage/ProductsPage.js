import React from "react";
import Products from "../../components/products/Products";



class ProductsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {products:[]}
    }
    
    getProducts = (e) => {
        this.setState({input: e.target.value})
    }
    submitProducts = () => {
        console.log(this.state);
    }

    deleteProducts = () => {
        this.setState({products:[]})
    }
    

    
    render() {
        return(
            <div>
                <input type={"text"} onChange = {this.getProducts}/>
                <button onClick={this.submitProducts}>Get Products</button>
                <button onClick = {this.deleteProducts}>delete</button>
                <Products products = {this.state.products}/>
            </div>
        ) 
    }
}
export default ProductsPage;