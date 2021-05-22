import React, { Component } from 'react'
import Header from './Header/Header';
import Filter from './Filter/Filter';
import './Home.css';
import Items from './Items/Items';
export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid ">
               <div className="row ">
                    <div className="row justify-content-between display">
                        <div className="col-xs-5 col-md-3   col-sm-4 col-lg-2">
                            <Filter />
                        </div>
                        <div className="col-xs-7 col-md-9 col-sm-8 col-lg-10
                        ">
                            <Items />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
