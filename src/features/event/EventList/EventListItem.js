import React from 'react';
import { Segment, Item, Button, Icon, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EventListAddendee from './EventListAddendee';

export default class EventListItem extends React.Component{
    render() {
        const {event, deleteEvent} = this.props;
        return(
            <React.Fragment>
                <Segment.Group>
                    <Segment>
                        <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                            <Item.Header as="a">{event.title}</Item.Header>
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                            </Item.Content>
                        </Item>
                        </Item.Group>
                    </Segment>
                    <Segment>
                        <span>
                        <Icon name="clock" /> {event.date} |
                        <Icon name="marker" /> {event.venue}  {event.city}
                        </span>
                    </Segment>
                    <Segment secondary>
                        <List horizontal>
                            {event.attendees && event.attendees.map(attendee => (
                                <EventListAddendee key={attendee.id} attendee={attendee} />
                            ))}
                        </List>
                    </Segment>
                    <Segment clearing>
                        <span>{event.description}</span>
                        <Button onClick={() => deleteEvent(event.id)} color="red" floated="right" content="Delete" />
                        <Button  as={Link} to={`/events/${event.id}`} color="teal" floated="right" content="View" />
                    </Segment>
                </Segment.Group>
            </React.Fragment>
        )
    }
}