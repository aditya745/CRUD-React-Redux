import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getInfo,
  addInfo,
  deleteUser,
  editUser,
  saveUser
} from "../actions/formActions";
import AddUserForm from "./addUserForm";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editUserData: {}
    };
  }
  componentWillMount() {
    this.props.getInfo();
  }
  handleAddUser = values => {
    this.props.addInfo(values);
  };
  handleDeleteUser = firstName => {
    this.props.deleteUser(firstName);
  };

  handleEdit = user => {
    this.setState({
      isEditing: true,
      editUserData: user
    });
    this.props.editUser(user);
  };

  handleSaveEdit = user => {
    this.props.saveUser(user);
    this.setState({
      isEditing: false,
      editUserData: {}
    })
  };

  render() {
    console.log(this.props.users);
    const userDetails = this.props.users.users.map(user => {
      return (
        <ul key={user.firstName}>
          <li>
            <b>FirstName:</b> {user.firstName}
          </li>
          <li>
            <b>LastName:</b> {user.lastName}
          </li>
          <li>
            <b>Location:</b> {user.location}
          </li>
          {
            <button onClick={(firstName) => this.handleEdit(user)}>
              Edit
            </button>
          }
          {
            <button onClick={this.handleDeleteUser.bind(this, user.firstName)}>
              Delete
            </button>
          }
        </ul>
      );
    });
    return (
      <div>
      {this.state.isEditing ?
        <AddUserForm initialValues = 
        {{
          firstName:this.state.editUserData.firstName,
          lastName:this.state.editUserData.lastName,
          location:this.state.editUserData.location,
        }} onSubmit={this.handleSaveEdit} /> :
        <AddUserForm onSubmit={this.handleAddUser} />}
        <h1>User's List</h1>
        {userDetails}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.reducer,
  
});
export default connect(
  mapStateToProps,
  { getInfo, addInfo, deleteUser, editUser, saveUser }
)(UserList);
