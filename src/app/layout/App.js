
import React, { Component, Fragment} from 'react';
import {Button, Container} from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingDashboardPage from '../../features/user/Settings/SettingDashboardPage';
import UserDetailed from '../../features/user/UserDetailed/UserDetailed';
import EventForm from '../../features/event/EventForm/EventForm';



export default class App extends Component{
  render() {
    return(
      <Fragment >
        <Route exact path="/" component={ HomePage } />
        <Route path="/(.+)" render={() => (
        <Fragment>
          <NavBar />
          <Button icon="smile" content='React Componenet' />         
          <Container className="main">
            <Route exact path="/" component={ HomePage } />
            <Route path="/peoples" component={ PeopleDashboard} />
            <Route path="/events" component={EventDashboard} />
            <Route path="/events/:id" component={EventDetailedPage} />
            <Route path="/profile/:id" component={UserDetailed} />
            <Route path="/settings" component={ SettingDashboardPage} />
            <Route path="/createEvent" component={ EventForm } />
          </Container>
        </Fragment>
        )} />
        
      </Fragment  >
    )
  }
}