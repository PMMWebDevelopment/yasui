import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from './Home.css';

const home = () => {
    return (
        <div className={classes.Home}>
            <Container fluid>
                <Row className={classes.HomeHeader}>
                    <Col>
                        <h1>Yasui「易い」</h1>        
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.HomeSubHeader}>
                        <h2>Cool tips for learners of Japanese</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.HomeMessage}>
                            <h3>Learning Japanese&#63; Ever <i>thought</i> of learning but believed that it was just too difficult&#63; This may just be the site for you. Here, you&apos;ll find tips on writing and grammar which won&apos;t necessarily make you fluent but will unlock some of the secrets of this mysterious and beautiful language.</h3>
                            <h4>Use the links at the top of the page to navigate through a series of lessons which will break down Japanese grammar into bitesize chunks.</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.HomeButton}>
                            <Button color="danger">
                                <Link to='/lessons' style={{ textDecoration: 'none', color: 'white' }}>
                                    Click here to begin the journey
                                </Link>
                            </Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default home;