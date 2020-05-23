import React, { Component } from 'react';
import './product-condenced.css';
import DataService from '../services/data-service';

var ds=new DataService();
class ProductCondensed extends Component {

    constructor(props){
        super(props);

        //Bind Function
        this.removeProduct=this.removeProduct.bind(this);
    }

    removeProduct=()=>{
        ds.removeWhishListItem(this.props.product); 
    }

    render() {
        return (
            <li className="list-group-item pc">
                <a href="/#" onClick={()=>this.removeProduct()} className="btn btn-outline-danger">X</a>
                <p>{this.props.product.title} |<b> Price ${this.props.product.price}</b> </p>
            </li>
        );

    }
}

export default ProductCondensed;
