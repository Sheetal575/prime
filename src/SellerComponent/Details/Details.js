import React, { Component } from 'react'
import Input from './Input'
export default class Details extends Component {
    render() {
        return (
            <div className="row ms-5 mr-5 ">
               <div className="col card border-0 shadow-sm ">
                    <div className="row p-0 m-0 lh-1">
                        <h6 className="text-muted my-1">Store Details</h6>
                        <h6 className="fs-6 text-info">Your store details will be display to the buyers when they browse your products.</h6>
                    </div>
                    <div className="row m-1">
                        <div className="col-6">
                           <Input />
                        </div>
                        <div className="col-6">
                            <h6 className="fs-6 text-muted">
                                Here is an example of how Store details will be displayed to the buyers:
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
