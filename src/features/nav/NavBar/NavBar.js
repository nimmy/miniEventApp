import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends React.Component{
    state = {
        authenticated: true
    }

    handleSignedOut = () => {
        this.setState({authenticated: false});
        this.props.history.push('/');
    }
    handleSignedIn = () => {
        this.setState({authenticated: true});
        
    }

    render() {
        const { authenticated } = this.state;
        return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" />
                    Re-vents
                </Menu.Item>
                <Menu.Item exact name="Events" as={NavLink} to='/events' />
                <Menu.Item name="People" as={NavLink} to='/peoples' />
                <Menu.Item name="Test Component" as={NavLink} to='/test' />
                <Menu.Item>
                    <Button as={Link} floated="right" positive inverted content="Create Event" to='/CreateEvent' />
                </Menu.Item>
                    { authenticated ? <SignedInMenu signedOut={this.handleSignedOut} /> : <SignedOutMenu signedIn={this.handleSignedIn} />}
            </Container>
            </Menu>
        )
    }
}
export default withRouter(NavBar);