import React, { Component } from 'react'

export default class Category extends Component {
    render() {
        return (
            <>
            <div className="row text-muted align-middle  ">
                <small className="fs-6 ms-1">CATEGORIES</small> 
            </div>
                            <div className="row p-0">
                                <h6><small className="text-muted align-middle m-1 p-0 dropdown-toggle" data-bs-toggle="collapse" 
                                       href="#collapseExample" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                           Clothing and Accessories
                                </small></h6>
                                <div class="collapse p-0 ms-3" id="collapseExample">
                                        hh
                                </div>
                            </div>
                            <div className="row">
                                <h6><small className="text-muted align-middle m-1 dropdown-toggle" data-bs-toggle="collapse" 
                                       href="#collapseExample1" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                           Topwear
                                </small></h6>
                                <small class="collapse ms-3" id="collapseExample1">
                                        hh
                                </small>
                            </div>
                            <div className="row">
                                <h6><small className="text-muted align-middle m-1 dropdown-toggle" data-bs-toggle="collapse" 
                                       href="#collapseExample2" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                          T-shirts
                                </small></h6>
                                <div class="collapse ms-3" id="collapseExample2">
                                        Men's Tshirt
                                </div>
                            </div>
                            </>
        )
    }
}
