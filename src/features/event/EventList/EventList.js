import React from 'react';
import EventListItem from './EventListItem';

export default class EventList extends React.Component{
    render() {
        const {events, deleteEvent} = this.props;
        return(
            <React.Fragment>
                {events.map(event => (
                <EventListItem key={event.id} event={event} deleteEvent={deleteEvent} />
                ))}
            </React.Fragment>
        )
    }
}