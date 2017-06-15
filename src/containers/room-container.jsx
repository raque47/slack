import React from 'react';
import { connect } from 'react-redux';
import Room from '../components/user-list';
import store from '../store';
import io from 'socket.io-client';

let socket = null;
const RoomContainer = React.createClass({
  constructor(props) {
    this.state = {
      input: '',
      connected: false,
      userLogged: 'Raquel',
      userName: '',// other(s []) person
      message: '',
      data: '',
    }
    this.handleOnClickButton = this.handleOnClickButton.bind(this)
    //this.handleNewRoom = this.handleNewRoom.bind(this)
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this)
    //this.fetchRooms = this.fetchRooms.bind(this)
  },
  componentDidMount: function () {
    //this.getUsers();  //***AGREGAR */
    //store.dispatch(loadSearchLayout('users', 'User Results'));
    socket = io.connect('http://localhost:3000');
  },
  addUserLogged: function () {
    socket.on('connect', function () {
      //call the server-side function 'adduser' and send value of userLogged)
      socket.emit('adduser', this.userLogged);
    })
  },
  updateChat: function () {
    // listener, whenever the server emits 'updatechat', this updates the chat body
    socket.on('updatechat', function (username, data) {
      this.setState({ userName: username, data: data });
      console.log('Server emitio updateChat con: username: ' + username + ' y data: ' + data);
    });
  },
  /*updaterooms: function(){
     //whenever the server emits 'updaterooms',this updates the room the client is in
      socket.on('updaterooms', function(rooms, current_room) {
        //	$('#rooms').empty();
          rooms.map(function(item){
            if( item.value == current_room){
                return <div> {item.value} </div>
            }
            else{
              return <div><a href="#" onclick="switchRoom(\''+value+'\')">
                        {item.value}
                      </a></div>
              }
            });
      });
  },*/
  sendMessageToChat: function () {
    socket.emit('sendchat', this.state.message);
  },
  // when the client hits ENTER on their keyboard
  handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('Cliente: el mensaje a enviar es: ' + e.target.value);
      this.setState({ message: e.target.value });
      //this.props.resetTKeyboardInput();
    }
  },
  // when the client clicks SEND
  handleOnClickButton(e) {
    console.log('Cliente: el mensaje a enviar es: ' + e.target.value);
    this.setState({ message: e.target.value });
  },
  render: function () {
    return (
      <div>
        <div style="float:left;width:100px;border-right:1px solid black;height:300px;padding:10px;overflow:scroll-y;">
          <b>ROOMS</b>
          <div id="rooms"></div>
        </div>
        <div style="float:left;width:300px;height:250px;overflow:scroll-y;padding:10px;">
          <div id="conversation">
            <h4>{this.state.userName + ': ' + this.state.data} </h4>
          </div>
          <input type="text" className="form-control" id="data" onChange={this.handleOnChangeInput} />
          <input type="button" className="button" id="datasend" value="send" onKeyPress={this.handleOnKeyPress} />/>
        </div>
      </div>
    );
  }

});

const mapStateToProps = function (store) {
  return {
    rooms: store.roomState.rooms,
  };
};

export default connect(mapStateToProps)(RoomContainer);
