import React from 'react';
import EventListItem from './EventListItem';

export default class EventList extends React.Component{
    render() {
        const {events, selectEvent, deleteEvent} = this.props;
        return(
            <React.Fragment>
                {events.map(event => (
                <EventListItem key={event.id} event={event} selectEvent={selectEvent} deleteEvent={deleteEvent} />
                ))}
            </React.Fragment>
        )
    }
}