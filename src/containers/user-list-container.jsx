import React from 'react';
import { connect } from 'react-redux';
import UserList from '../components/user-list';
import store from '../store';
import axios from 'axios';

const UserListContainer = React.createClass({

  componentDidMount: function() {
    this.getAllUsers();
  },
  getAllUsers: function() {
    console.log('Estoy en getAllUsers '+ this.props.users);
    const self = this;
    axios.get('http://localhost:3000/api/user').then(function (response) {
      this.props.users= response.data;
    })
    console.log('Estoy en getAllUsers '+ this.props.users);
  },
  render: function() {
    return (
      <UserList users={this.props.users} deleteUser={userApi.deleteUser} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
