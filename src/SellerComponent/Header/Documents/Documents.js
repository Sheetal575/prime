import React, { Component } from 'react'
import './Documents.css'
export default class Documents extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    getDocument(doc){
       return doc.map((docs)=>{
            return( 
                    <div className=" card col-3 shadow -sm border-0 m-3 mb-0 gap  rounded ">
                        <div className="row p-1  m-0 ">
                            <span className="text-center fw-bold">
                                 {docs.field}
                            </span>
                        </div>
                        <div className="row p-0  m-0 bg p-1 rounded cursor">
                            <span className="text-center fs-6 text-white fw-bold">
                                 {docs.status}
                            </span>
                        </div>
                        <div className="row p-0  m-0  p-1  cursor">
                            <span className="text-center fs-6 text-info">
                                 {docs.upload}
                            </span>
                        </div>
                       
                    </div>
                )
        })
    }
    render() {
        return (
            <div className="col p-4 m-1">
                <div className="row text-muted">
                    <h5>You are almost ready to start selling!</h5>
                    <h6>Please complete all the steps below.</h6>
                </div>
                <div className="row justify-content-center">
                    {this.getDocument(this.props.document)}
                </div>
            </div>
        )
    }
}
