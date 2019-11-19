import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default class EventListAddendee extends React.Component{
    render() {
        const {attendee} = this.props;
        return(
            <React.Fragment>
                <List.Item>
                    <Image as="a" size="mini" circular src={attendee.photoURL} />
                </List.Item>
            </React.Fragment>
        )
    }
}