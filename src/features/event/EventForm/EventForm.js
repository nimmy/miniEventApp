import React from 'react';
import {connect}  from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput';
import TextAera from '../../../app/common/form/TextAera';
import SelectInput from '../../../app/common/form/SelectInput';

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = { }; 

    if(eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }
    return {
        initialValues: event
    }
}

const actions ={
    createEvent,
    updateEvent
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends React.Component{
    
    handleFormSubmit = (values) => {
        console.log(values);
        if(this.props.initialValues.id) {
            this.props.updateEvent(values);
            this.props.history.push(`/events/${this.props.initialValues.id}`);
        } else {
            const newEvent = {
                ...values,
                id : cuid(),
                hostPhotoURL : '/assets/user.png',
                hostedBy: 'Bob'
            }
            this.props.createEvent(newEvent);
            this.props.history.push(`/events/${newEvent.id}`);
        }
    }

    render() {
        const {history, initialValues} = this.props;
        return(
            <React.Fragment>
                <Grid>
                    <Grid.Column width={10}>
                        <Segment>
                            <Header sub color='teal' content="Event Details" />
                            <Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)} autoComplete="off">
                                <Field name="title" component={TextInput} placeholder="Give your event name" />
                                <Field name="category" component={SelectInput} options={category} placeholder="What is event all about" />
                                <Field name="description" component={TextAera} placeholder="Tell us about your event" />
                                <Header sub color='teal' content="Event Location Details" />
                                <Field name="City" component={TextInput} placeholder="Event City" />
                                <Field name="venue" component={TextInput} placeholder="Event Venu" />
                                <Field name="date" component={TextInput} placeholder="Event Date" />
                                <Button positive type="submit"> Submit</Button>

                                <Button type="button" onClick={initialValues.id ? () => history.push(`/events/${initialValues.id}`): () => history.push('/events')}>Cancel</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm'})(EventForm));