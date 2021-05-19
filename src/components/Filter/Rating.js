import React, { Component } from 'react'

export default class Rating extends Component {
    render() {
        return (
            <div>
                <div className="row p-1">
                <h6><small className="text-muted align-middle m-1 dropdown-toggle" data-bs-toggle="collapse" 
                                       href="#collapseExample5" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                           CUSTOMER BRAND
                    </small></h6>
                    <div class="collapse" id="collapseExample5">
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7 ">
                                 <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1">4 start +</span>
                            </label>
                        </div>     
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7">
                                <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1">3 start +</span>
                            </label>
                        </div> 
                        <div class="  checkbox p-0 m-0 align-middle ms-3">
                             <label className="align-middle text-muted fs-7">
                                <input class="align-middle" type="checkbox" value="" />
                                <span className="ms-1">2 start +</span>
                            </label>
                        </div> 
                        <div class="  checkbox p-0 m-0 align-middle ms-3">
                             <label className="align-middle text-muted fs-7">
                                <input class="align-middle" type="checkbox" value="" />
                                <span className="ms-1">1 start +</span>
                            </label>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
