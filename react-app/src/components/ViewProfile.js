import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class ViewProfile extends Component {

    render() {
        return (
            <div className="card mt-5" style={{ width: '100%' }}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="float-right btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default ViewProfile