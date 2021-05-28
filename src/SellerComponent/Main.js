import React, { Component } from 'react'
import Details from './Details/Details'
import Documents from './Header/Documents/Documents'
import Header from './Header/Header'
import {DOCUMENT } from './shared/doc'
export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            document:DOCUMENT
        }
    }
    render() {
        return (
            <>
            <div className="row ">
                <Header />
            </div>
            <div className=" row  h-100 container-fuild">
                <div className="col-9 ">
                    <Documents document = {this.state.document}/>
                    <Details />
                </div>
                <div className="col-3 border-sm">
                    gh
                </div>
            </div>
            </>
        )
    }
}
