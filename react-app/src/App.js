import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const List = props =>
  (
    <tr>
      <td>{props.value.name}</td>
      <td> <a href={'mailto:'+props.value.email} target="blank"> {props.value.email} </a> </td>
      <td>{props.value.phone}</td>
    </tr>
  )

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userList: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ userList: res.data }))
      .catch(err => console.log(err))
  }

  UserList = () => {
    return this.state.userList.map((item, i) => {
      return <List value={item} key={i} />
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

