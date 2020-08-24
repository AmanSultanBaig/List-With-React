import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import swal from 'sweetalert'
class ViewProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProfile: {},
            userAddress: {}
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
            .then(userDetails => {
                this.setState({ userProfile: userDetails.data })
                this.setState({ userAddress: userDetails.data.address })
                console.log(userDetails.data)
            }
            )
            .catch(err => swal("Opps!", err.message, "error"))
    }

    render() {
        return (
            <div className="card mt-5" style={{ width: '100%' }}>
                <div className="card-body">
                    <h3 className="card-title">{this.state.userProfile.name} <span style={{ fontSize: '10px' }}> <b>Email</b> ({this.state.userProfile.email}), <b>UserName</b> ({this.state.userProfile.username}) </span></h3>
                    <div className="row mt-5">
                        <p className="card-text col-md-4"><b>Phone:</b> {this.state.userProfile.phone}</p>
                        <p className="card-text col-md-4"><b>City:</b> {this.state.userAddress.city}</p>
                        <p className="card-text col-md-4"> <b>Street:</b> {this.state.userAddress.street}</p>
                    </div>
                    <a href="/" className="float-right btn btn-dark">Go Back</a>
                </div>
            </div>
        )
    }
}

export default ViewProfile