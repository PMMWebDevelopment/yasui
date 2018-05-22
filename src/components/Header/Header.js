import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {
    setLessonSection
} from '../../store/actions';

import classes from './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
    }
    
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleLessonSectionChoice(chosenLessonSection) {
        this.props.setLessonSection(chosenLessonSection);
    }

    render() {
        return (
            <div className={classes.Header}>
                <Navbar color="danger" dark expand="md" >
                    <NavbarBrand aria-label='home' tag={NavLink} to={'/'} className="mr-auto">
                        <span className='text-white'>
                            <b>「易い」</b>
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar className='ml-auto'>
                            <NavItem aria-label='lessons' className={classes.NavItem}>
                                <NavLink to='/lessons' style={{ textDecoration: 'none', color: 'white' }}>
                                    Lessons
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle aria-label='sections' className='text-white' nav caret>                       </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink onClick={() => this.handleLessonSectionChoice(1)} to='/lessonsection' style={{ textDecoration: 'none', color: 'red' }}>
                                        Section 1
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink onClick={() => this.handleLessonSectionChoice(2)}to='/lessonsection' style={{ textDecoration: 'none', color: 'red' }}>
                                        Section 2
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem >
                                    <NavLink onClick={() => this.handleLessonSectionChoice(3)}to='/lessonsection' style={{ textDecoration: 'none', color: 'red' }}>
                                        Section 3
                                    </NavLink>
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem aria-label='reference' className={classes.NavItem}>
                                <NavLink to='/reference' style={{ textDecoration: 'none', color: 'white' }}>
                                    Reference
                                </NavLink>
                            </NavItem>
                            {/* {this.props.authenticated ? 
                                <NavItem className={classes.NavItem}>
                                    <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
                                    Log out: {this.props.currentUser}
                                    </NavLink>
                                </NavItem> : */}
                                {/* <NavItem className={classes.NavItem}>
                                    <NavLink to='/signuplogin' style={{ textDecoration: 'none', color: 'white' }}>
                                        Sign up / Log in
                                    </NavLink>
                                </NavItem> */}
                            {/* } */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chosenLessonSection: state.reducer.chosenLessonSection,
        chosenLesson: state.reducer.chosenLesson
    }
};

const mapDispatchToProps = dispatch => ({
    setLessonSection: chosenLessonSection => dispatch(setLessonSection(chosenLessonSection))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);