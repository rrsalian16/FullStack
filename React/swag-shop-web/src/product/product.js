import React, { Component } from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WHISHLIST_CHANGED} from '../services/notification-service';

let ds=new DataService();
let ns=new NotificationService();
class Product extends Component {

    constructor(props){
        super(props);

        this.state={onWhishList:ds.itemOnWhshList()};
        //Bind Function
        this.onBtnClicked=this.onBtnClicked.bind(this);
        this.onWhishListChanged=this.onWhishListChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WHISHLIST_CHANGED, this, this.onWhishListChanged);
    }
    componentWillUnmount() {
        ns.removeObserver(NOTIF_WHISHLIST_CHANGED, this);
    }

    onWhishListChanged(newWhishList){
        this.setState({onWhishList:ds.itemOnWhshList(this.props.product)})
    }

    onBtnClicked = () => {
        if(this.state.onWhishList){
            ds.removeWhishListItem(this.props.product)
        }
        else{
            ds.addWhishListItem(this.props.product);
        }
        
    }

    render() {
        var btnClass;

        if(this.state.onWhishList){
            btnClass="btn btn-danger"
        }
        else{
            btnClass="btn btn-primary"
        }

        return (
            <div className="card product">
                <img alt="Product" src={this.props.product.imgUrl} className="card-img-top"></img>
                <div className="card-blcok">
                    <h4 className="card-titile">{this.props.product.title} </h4>
                    <p className="card-text">Price: ${this.props.product.price} </p>
                    <a href="/#" onClick={()=> this.onBtnClicked() } className={btnClass}>{this.state.onWhishList ? "Remove From WhishList" : "Add To WhishList"} </a>
                </div>
            </div>
        );

    }
}

export default Product;
