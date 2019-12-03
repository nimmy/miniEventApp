
import React, { Component, Fragment} from 'react';
import {Button, Container} from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingDashboardPage from '../../features/user/Settings/SettingDashboardPage';
import UserDetailed from '../../features/user/UserDetailed/UserDetailed';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testaera/TestComponent';



class App extends Component{
  render() {
    return(
      <Fragment >
        <Route exact path="/" component={ HomePage } />
        <Route path="/(.+)" render={() => (
        <Fragment>
          <NavBar />
          <Button icon="smile" content='React Componenet' />         
          <Container className="main">
            <Switch key={this.props.location.key}>
              <Route exact path="/" component={ HomePage } />
              <Route path="/peoples" component={ PeopleDashboard} />
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/profile/:id" component={UserDetailed} />
              <Route path="/settings" component={ SettingDashboardPage} />
              <Route path={['/createEvent', '/manage/:id']} component={ EventForm } />
              <Route path="/test" component={ TestComponent } />
            </Switch>
          </Container>
        </Fragment>
        )} />
        
      </Fragment  >
    )
  }
}

export default withRouter(App);