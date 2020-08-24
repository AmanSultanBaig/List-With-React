import React, { Component } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
const List = props =>
    (
        <tr>
            <td>{props.value.name}</td>
            <td> <a href={'mailto:' + props.value.email} target="blank"> {props.value.email} </a> </td>
            <td>{props.value.phone}</td>
            <td> <Link to={"/view-profile/" + props.value.id}>View Profile</Link> </td>
        </tr>
    )

class UserList extends Component {
    constructor() {
        super();

        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({ userList: res.data }))
            .catch(err => swal("Opps!", err.message, "error"))
    }

    UserList = () => {
        return this.state.userList.map((item, i) => {
            return (
                <List value={item} key={i} />
            )

        })
    }

    render() {
        return (
            <table className="table mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.UserList()
                    }
                </tbody>
            </table>
        )
    }
}

export default UserList