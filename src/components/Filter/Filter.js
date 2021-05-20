import React, { Component } from 'react'
import Category from './Category'
import Price from './Price'
import Brand from './Brand';
import Rating from './Rating';
import Size from './Size';
import Offers from './Offers';
import Pattern from './Pattern';
import Neck from './Neck';
import Occasion from './Occasion';
import Discount from './Discount';
export default class Filter extends Component {
    render() {
        return (
            <>
            <div className="container items" >
                <div className="card border-0 shadow-sm ">
                    <div className="col">
                        <div className="row-1 p-1 m-0 heading">
                                <h6 className="text-muted align-middle m-1">Filter</h6>
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Category />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row ">
                            <Price />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row ">
                             <Brand />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Rating />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Size />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Offers />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Discount />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Neck />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Occasion />
                        </div>
                        <hr className="m-0 p-0 text-secondary"/>
                        <div className="row">
                            <Pattern />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
