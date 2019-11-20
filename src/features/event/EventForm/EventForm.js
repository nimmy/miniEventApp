import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

export default class EventForm extends React.Component{
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }

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
            this.props.undateEvent(this.state);
        } else {
            this.props.createEvent(this.state);
        }
    }

    handleInputName = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }
    render() {
        const {cancelFormOpen} = this.props;
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
                        <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
                    </Form>
                </Segment>
            </React.Fragment>
        )
    }
}