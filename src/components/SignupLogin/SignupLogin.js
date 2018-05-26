import React, { Component } from 'react';
import firebase from "../../higherorder/firebase/firebase"; 
import axios from 'axios';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import classes from './SignupLogin.css';
import { connect } from 'react-redux';
import {
    setUserEmail,
    setAuthState,
    commitBookmarkToCentralStore,
    setUsersBookmarkID
} from '../../store/actions';
class SignupLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    updateEmail = (event) => {
        this.setState({email : event.target.value})
    }
        
    updatePassword = (event) => {
        this.setState({password : event.target.value})
    }

    handleSignUp() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        this.props.setUserEmail(user.email);
                        this.props.setAuthState(true);
                        window.alert('Account created for ' + user.email)
                    }
                });
            })
            .catch(error => {
                window.alert(error);
            }
        );
    }

    handleLogIn() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        this.props.setUserEmail(user.email);
                        this.props.setAuthState(true);
                        window.alert('Logged in as ' + user.email)
                    }
                });
                this.findUserBookmark(this.state.email);
            })
            .catch(error => {
                window.alert(error);
            }
        );
    }

    findUserBookmark(user) {
        firebase.auth().currentUser.getIdToken().then((idToken) => {
            axios.get('https://yasui-pmm.firebaseio.com/bookmarks.json?auth=' + idToken + '&orderBy="user"&equalTo="' + user + '"')
                .then((response) => {
                    console.log(response)
                    let usersBookmarkId = Object.keys(response.data)[0];
                    let bookmarkedLessonNumber = response.data[usersBookmarkId].bookmarkNumber;
                    this.props.setUsersBookmarkID(usersBookmarkId);
                    this.props.commitBookmarkToCentralStore(bookmarkedLessonNumber);
                }
            );
        });
    }
    
    render() {
        
        return (
            <div className={classes.SignupLogin}>
                <Container fluid>
                    <Row className={classes.SignupLoginHeader}>
                        <Col>
                            <h1>Sign up / Log in</h1>        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={classes.Form}>
                                <Form>
                                    <FormGroup>
                                        <Label for="email">E-mail address</Label>
                                        <Input type="email" name="email" id="email" placeholder="Type e-mail address" value={this.state.email}
                                        onChange={event => this.updateEmail(event)}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="password" placeholder="Type password" value={this.state.pasword}
                                        onChange={event => this.updatePassword(event)}/>
                                    </FormGroup>
                                    <Button color='danger' className={classes.SignupLoginButton} onClick={this.handleSignUp}>Sign up</Button>
                                    <Button color='danger' className={classes.SignupLoginButton} onClick={this.handleLogIn}>Log in</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userEmail: state.reducer.userEmail,
        authState: state.reducer.authState,
        usersBookmarkID: state.reducer.usersBookmarkID,
        bookmarkedLessonNumber: state.reducer.bookmarkedLessonNumber
    }
};

const mapDispatchToProps = dispatch => ({
    setUserEmail: userEmail => dispatch(setUserEmail(userEmail)),
    setAuthState: authState => dispatch(setAuthState(authState)),
    setUsersBookmarkID: usersBookmarkID => dispatch(setUsersBookmarkID(usersBookmarkID)),
    commitBookmarkToCentralStore: bookmarkedLessonNumber => dispatch(commitBookmarkToCentralStore(bookmarkedLessonNumber))
});

export default connect (mapStateToProps, mapDispatchToProps)(SignupLogin);