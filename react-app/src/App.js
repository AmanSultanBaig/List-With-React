import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const List = props =>
  (
    <tr>
      <td>{props.value.name}</td>
      <td> <a href={'mailto:' + props.value.email} target="blank"> {props.value.email} </a> </td>
      <td>{props.value.phone}</td>
      <td> <Link to={"/view-profile" + props.value.id}>View Profile</Link> </td>
    </tr>
  )

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userList: []
    }
  }

  onEditCustomer() {
    console.log('custId')
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ userList: res.data }))
      .catch(err => swal("Opps!", err.message, "error"))
  }

  UserList = () => {
    return this.state.userList.map((item, i) => {
      return (
        <div>
          <List value={item} key={i} />
        </div>
      )

    })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">
            <span style={{ fontWeight: '800' }}>USERLIST With REACT JS</span>
          </a>
        </nav>
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

      </div>
    );
  }
}

