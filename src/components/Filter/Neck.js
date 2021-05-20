import React, { Component } from 'react'

export default class Neck extends Component {
    render() {
        return (
            <div>
                <div className="row p-1">
                <h6><small className="text-muted align-middle m-1 dropdown-toggle fs-6" data-bs-toggle="collapse" 
                                       href="#collapseExample9" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                           NECK TYPE
                    </small></h6>
                    <div class="collapse" id="collapseExample9 fs-6">
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7 ">
                                 <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1">Round</span>
                            </label>
                        </div>     
                        <div class="checkbox p-0 m-0 align-middle ms-3 fs-6">
                            <label className="align-middle text-muted fs-7">
                                <input class="align-middle " type="checkbox" value="" />
                                 <span className="ms-1">Deep</span>
                            </label>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
