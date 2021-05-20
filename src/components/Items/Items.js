import React, { Component } from 'react'
import './Items.css';
import Product from './Product';
export default class Items extends Component {
    listFeatures(){
        let items = ['Sort By','Popularity','Price-Low to High','Price-High to Low','Newest First'];
        return(
            <nav className="nav shadow-none p-0 m-0">
                {
                    items.map((item,index)=>{
                        return(
                            <a className="nav-link p-2 ms-1 " key={index} href="#">{item}</a>
                        )
                    })
                }
            </nav>
        )
    }
    render() {
        return (
            <div className="col container-fluid p-2 px-3">
                <div className="row ps-2 m-0">
                    <h6 className="fs-5 fw-8">Men's Tshirt  
                        <small className="text-muted fs-19">
                            (Showing 1-40 product of 81,965 products)
                        </small>
                    </h6>
                </div>
                <div className="row w-100 container-fluid">
                    {this.listFeatures()}
                </div>
                <div className="row ">
                    
                        <Product />
                    
                </div>
            </div>
        )
    }
}
