import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
                // <div className="col">
                <>
                    <div className="row p-1">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row p-1">
                        <textarea class="form-control"  rows="3"></textarea>
                    </div>
                    <div className="row p-2 w-50">
                        <button type="button" class="btn bg text-white fw-bold">Save</button>
                    </div>
                </>
        )
    }
}
