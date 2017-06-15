import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/main-layout';
// Pages
import UserListContainer from './containers/user-list-container';
import RoomContainer from './containers/room-container';

const router = () => (
  <Router>
    <Route exact path="/" component={MainLayout}>

      <Route path="users">
        <IndexRoute component={UserListContainer} />
        <Route path=":userId" component={RoomContainer} />
      </Route>

    </Route>
  </Router>
);

export default router;
