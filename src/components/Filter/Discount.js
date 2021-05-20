import React, { Component } from 'react'

export default class Discount extends Component {
    render() {
        return (
            <div>
                <div className="row p-1">
                <h6><small className="text-muted align-middle m-1 dropdown-toggle fs-6" data-bs-toggle="collapse" 
                                       href="#collapseExample8" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                           DISCOUNT
                    </small></h6>
                    <div class="collapse" id="collapseExample8">
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7 ">
                                 <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1 fs-6">50% Off</span>
                            </label>
                        </div>     
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7">
                                <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1 fs-6">20% Off</span>
                            </label>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
