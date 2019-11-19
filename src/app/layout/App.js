
import React from 'react';
import {Button, Container} from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

export default class App extends React.Component{
  render() {
    return(
      <React.Fragment >
        <NavBar />
        <Button icon="smile" content='React Componenet' />
        <Container className="main">
          <EventDashboard />
        </Container>
      </React.Fragment  >
    )
  }
}