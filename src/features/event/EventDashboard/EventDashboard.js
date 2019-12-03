import React from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { createEvent, deleteEvent, updateEvent} from '../eventActions';


const mapState = ( state ) => ({
  events: state.events
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}

class EventDashboard extends React.Component{

    handleIsOpenToggle = () => {
      this.setState(({isOpen}) => ({
          isOpen: !isOpen
      }))
    }

    handleDeleteEvent = (id) => {
      this.props.deleteEvent(id);
    }

    render () {
        const { events } = this.props;
        return(
            <Grid>
                <Grid.Column width={10}>
                    <EventList 
                      deleteEvent={this.handleDeleteEvent} 
                      events={events} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Activity Feed</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapState, actions)(EventDashboard)