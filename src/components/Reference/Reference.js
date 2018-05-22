import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from './Reference.css';

const reference = () => {

    return (
        <div className={classes.Reference}>
            <Container fluid>
                <Row className={classes.ReferenceHeader}>
                    <Col>
                        <h1>Reference Section</h1>        
                    </Col>
                </Row>
                <Row className={classes.ReferenceSubHeader}>                    
                    <Col>
                        <div className={classes.ReferenceMessage}>
                            <p>Here, you will find some useful guides to help understand parts of the Japanese language.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.ReferenceContent}>
                            <Button color="danger" size="lg" block>
                                <Link to='/hiragana' style={{ textDecoration: 'none', color: 'white' }} >
                                    Hiragana chart
                                </Link>
                            </Button>
                            <Button color="danger" size="lg" block>
                                <Link to='/katakana' style={{ textDecoration: 'none', color: 'white' }} >
                                    Katakana chart
                                </Link>
                            </Button>
                            <Button color="danger" size="lg" block>
                                <Link to='/verbcharts' style={{ textDecoration: 'none', color: 'white' }} >
                                    Verb Charts
                                </Link>
                            </Button>
                            <Button disabled color="danger" size="lg" block>
                                {/* <Link to='/verbcheatsheet' style={{ textDecoration: 'none', color: 'white' }} > */}
                                    Verb Cheatsheet (coming soon)
                                {/* </Link> */}
                            </Button>
                            <Button disabled color="danger" size="lg" block>
                                {/* <Link to='/jptyping' style={{ textDecoration: 'none', color: 'white' }} > */}
                                    How to type in Japanese on your machine (coming soon)
                                {/* </Link> */}
                            </Button>
                            <Button disabled color="danger" size="lg" block>
                                {/* <Link to='/links' style={{ textDecoration: 'none', color: 'white' }} > */}
                                    Useful links (coming soon)
                                {/* </Link> */}
                            </Button>
                        </div>        
                    </Col>
                </Row>
            </Container>
        </div>
    )   
}

export default reference;