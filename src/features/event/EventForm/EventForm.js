import React from 'react';
import {connect}  from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }; 

    if(eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }
    return {
        event
    }
}

const actions ={
    createEvent,
    updateEvent
}

class EventForm extends React.Component{
    state ={...this.props.event}; 
    componentDidMount() {
        if(this.props.selectedEvent !== null) {
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }
    handleFormSubmit = (evt) => {
        evt.preventDefault();
        if(this.state.id) {
            console.log(this.props);
            this.props.updateEvent(this.state);
            this.props.history.push(`/events/${this.state.id}`);
        } else {
            const newEvent = {
                ...this.state,
                id : cuid(),
                hostPhotoURL : '/assets/user.png'
            }
            this.props.createEvent(newEvent);
            this.props.history.push(`/events/${newEvent.id}`);
        }
    }

    handleInputName = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }
    render() {
        const { title, date, city, venue, hostedBy } = this.state;
        return(
            <React.Fragment>
                <Segment>
                    <Form onSubmit={this.handleFormSubmit} autoComplete="off">
                        <Form.Field>
                        <label>Event Title</label>
                        <input type="text" name="title" value={title} onChange={this.handleInputName} placeholder="First Name" />
                        </Form.Field>
                        <Form.Field>
                        <label>Event Date</label>
                        <input type="date" name="date" value={date} onChange={this.handleInputName} placeholder="Event Date" />
                        </Form.Field>
                        <Form.Field>
                        <label>City</label>
                        <input type="text" name="city" value={city} onChange={this.handleInputName} placeholder="City event is taking place" />
                        </Form.Field>
                        <Form.Field>
                        <label>Venue</label>
                        <input type="text" name="venue" value={venue} onChange={this.handleInputName} placeholder="Enter the Venue of the event" />
                        </Form.Field>
                        <Form.Field>
                        <label>Hosted By</label>
                        <input type="text" name="hostedBy" value={hostedBy} onChange={this.handleInputName} placeholder="Enter the name of person hosting" />
                        </Form.Field>
                        <Button positive type="submit">
                        Submit
                        </Button>
                        <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                    </Form>
                </Segment>
            </React.Fragment>
        )
    }
}

export default connect(mapState, actions)(EventForm);