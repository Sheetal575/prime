import React, { Component } from 'react'
import './Brand.css';
export default class Brand extends Component {
    render() {
        return (
            <div>
                <div className="row p-1">
                    <h6><small className="text-muted align-middle m-1 dropdown-toggle" data-bs-toggle="collapse" 
                                       href="#collapseExample4" 
                                       role="button" 
                                       aria-expanded="false" aria-controls="collapseExample">
                                           BRAND
                    </small></h6>
                    <div class="collapse" id="collapseExample4">
                        <div class=" input-group w-80 bg-light rounded">
                                <input id="search-input" 
                                      type="search" 
                                      id="form1"
                                      class="form-control 
                                             bg-light 
                                             align-middle 
                                             fs-6 fw-normal 
                                             p-2 
                                             border-0 
                                             rounded 
                                             "
                                      placeholder="Search Brand" />              
                        </div>
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7 ">
                                 <input class="align-middle " type="checkbox" value="" />
                                    <span className="ms-1">Addidas</span> 
                            </label>
                        </div>     
                        <div class="checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7">
                                   <input class="align-middle " type="checkbox" value="" />
                                   <span className="ms-1">Nike</span> 
                            </label>
                        </div> 
                        <div class="  checkbox p-0 m-0 align-middle ms-3">
                            <label className="align-middle text-muted fs-7">
                                <input class="align-middle" type="checkbox" value="" />
                                <span className="ms-1">Puma</span> 
                            </label>
                        </div> 
                    </div>

                </div>
                
            </div>
        )
    }
}
