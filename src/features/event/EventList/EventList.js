import React from 'react';
import EventListItem from './EventListItem';

export default class EventList extends React.Component{
    render() {
        const {event, deleteEvent} = this.props;
        return(
            <React.Fragment>
                {event.map(event => (
                <EventListItem key={event.id} event={event} deleteEvent={deleteEvent} />
                ))}
            </React.Fragment>
        )
    }
}