import React from 'react';
import EventListItem from './EventListItem';

export default class EventList extends React.Component{
    render() {
        return(
            <React.Fragment>
                {this.props.events.map(event => (
                <EventListItem key={event.id} event={event} />
                ))}
            </React.Fragment>
        )
    }
}