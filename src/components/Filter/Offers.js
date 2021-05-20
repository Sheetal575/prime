import React, { Component } from 'react'

export default class Offers extends Component {
    render() {
        return (
            <div>
                <div className="row p-1 ">
                <h6><small className="text-muted align-middle m-1 dropdown-toggle fs-6" data-bs-toggle="collapse" 
                                       href="#collapseExample7" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                           OFFERS
                    </small></h6>
                    <div class="collapse" id="collapseExample7">
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7">
                                <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1 fs-6">Buy More, Earn More</span>
                            </label>
                        </div>    
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7">
                                <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1 fs-6">Special Price</span>
                            </label>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
