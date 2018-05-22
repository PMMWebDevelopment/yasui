import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {
    setLessonSection
} from '../../store/actions';

import { Container, Row, Col } from 'reactstrap';
import classes from './Lessons.css';

class Lessons extends Component {

    constructor(props) {
        super(props)
      }

    handleLessonSectionChoice(chosenLessonSection) {
        this.props.setLessonSection(chosenLessonSection);
    }

    render() {
        return (
            <div className={classes.Lessons}>
                <Container fluid>
                    <Row className={classes.LessonsHeader}>
                        <Col>
                            <h1>Lessons</h1>        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={classes.LessonsMessage}>
                                <h5>Here, you will find three sections on Japanese writng and grammar, the higher the section number, the greater the complexity, so it is a good a idea to start at Section 1.</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to='/lessonsection' style={{ textDecoration: 'none', color: 'white' }} onClick={() => this.handleLessonSectionChoice(1)}>
                                <div className={classes.LessonSectionDiv1} >
                                    <div>一</div>
                                    <div>1</div>
                                </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/lessonsection' style={{ textDecoration: 'none', color: 'white' }} onClick={() => this.handleLessonSectionChoice(2)}>
                                <div className={classes.LessonSectionDiv2}>
                                    <div>二</div>
                                    <div>2</div>
                                </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/lessonsection' style={{ textDecoration: 'none', color: 'white' }} onClick={() => this.handleLessonSectionChoice(3)}>
                                <div className={classes.LessonSectionDiv3}>
                                    <div>三</div>
                                    <div>3</div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
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
    setLessonSection: chosenLessonSection => dispatch(setLessonSection(chosenLessonSection)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);