import React, { Component } from 'react';
import './whishlist.css';

import ProductCondenced from '../product-condenced/product-condenced';
import DataService from '../services/data-service';
import NotificationService,{NOTIF_WHISHLIST_CHANGED} from '../services/notification-service';

let ns=new NotificationService();
class Whishlist extends Component {

    constructor(props){
        super(props);

        this.state={whishList:[]};

        //Bind function
        this.createWhishlist=this.createWhishlist.bind(this);
        this.onWhishListChanged = this.onWhishListChanged.bind(this);
    }

    componentDidMount(){
        ns.addObserver(NOTIF_WHISHLIST_CHANGED,this,this.onWhishListChanged);
    }
    componentWillUnmount(){
        ns.removeObserver(NOTIF_WHISHLIST_CHANGED,this);
    }

    onWhishListChanged(newWhishList){
        this.setState({whishList:newWhishList});
    }

    createWhishlist=()=>{
        const list=this.state.whishList.map((product)=>
            <ProductCondenced product={product} key={product._id} />
        );

        return (list);
    }

    render() {
        return (
            <div className="card">
                <div className="card-block whish">
                    <h4 className="card-title">Whish List</h4>
                    <ul className="list-group">
                        {this.createWhishlist()}
                    </ul>
                </div>
            </div>
        );

    }
}

export default Whishlist;
