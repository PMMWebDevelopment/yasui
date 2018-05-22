import React, { Component } from 'react';
import axios from 'axios';
import Interweave from 'interweave';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import classes from './Lesson.css';
import { connect } from 'react-redux';
import {
    setLesson,
    setLessonSection,
    setLessonName,
    setLessonCommentaryID,
    setLessonLayout,
    setSectionForChosenLesson
} from '../../../store/actions';
import shuffle from 'lodash.shuffle';
import Spinner from '../../UI/Spinner';

class Lesson extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lessonCommentary: '',
            lessonExamples: [],
            lessonsWithNoExamples: [0, 4, 19, 20, 21, 22, 32, 33, 76],
            loading: false,
        }
    }

    componentDidMount() {
        this.getLesson(this.props.chosenLessonCommentaryID, this.props.chosenLesson);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.chosenLesson !== this.props.chosenLesson) {
            this.getNewLessonDetails(nextProps.chosenLesson);
        }
     }
    getLesson(chosenLessonCommentaryID, chosenLesson) {
        this.setState({loading: true});
        axios.get('https://pastebin.com/raw/' + chosenLessonCommentaryID)
        .then(response => {
            this.setState({lessonCommentary: response.data, loading: false});
            if (this.state.lessonsWithNoExamples.indexOf(chosenLesson) === -1) {
                axios.get('https://yasui-pmm.firebaseio.com/sentences.json?orderBy="lesson"&equalTo=' + chosenLesson)
                .then(response => {
                    let startID = +(Object.keys(response.data)[0]);
                    let endID = (+(Object.keys(response.data)[0]) + (Object.keys(response.data).length));
                    const lessonExamples = [];
                    for (let i = startID; i < endID; i += 1) {
                        let exampleEnglish = response.data[i].en;
                        let exampleJapanese = response.data[i].jp;
                        let exampleRomaji = response.data[i].romaji;
                        let exampleLesson = response.data[i].lesson;
                        let example = [
                            i,
                            exampleEnglish,
                            exampleJapanese,
                            exampleRomaji,
                            exampleLesson
                        ];
                        lessonExamples.push(example);
                    }
                    let shuffledLessonsExamples = shuffle(lessonExamples);
                    this.setState({lessonExamples: shuffledLessonsExamples});
                    } 
                )
                .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));

    }

    getNewLessonDetails(chosenLesson) {
        axios.get('https://yasui-pmm.firebaseio.com/grammar/' + chosenLesson + '.json')
            .then(response => {
                this.props.setLessonName(response.data.grammarpoint);
                this.props.setLessonCommentaryID(response.data.commentary);
                this.props.setLessonLayout(response.data.layout);
                this.props.setSectionForChosenLesson(response.data.section);
                this.getLesson(this.props.chosenLessonCommentaryID, this.props.chosenLesson);
            })
            .catch(error => console.log(error));
    }

    handleLessonChoice(chosenLesson) {
        this.props.setLesson(chosenLesson);
    }
    
    handleLessonSectionChoice(chosenLessonSection) {
        this.props.setLessonSection(chosenLessonSection);
    }

    setLayout(layout) {
        const displayExamples = [];
        let lessonExamplesSample = this.state.lessonExamples.length > 6 ? 6 : this.state.lessonExamples.length
        for (let i = 0; i < lessonExamplesSample; i += 1) {
            displayExamples.push(
                <Alert className={classes.LessonExample} color="danger" key={this.state.lessonExamples[i][0]}>
                        <span className={classes.ExampleHeading}><b>{this.state.lessonExamples[i][2]}</b></span><br/>
                        <i>{this.state.lessonExamples[i][3]}<br/></i>
                        {this.state.lessonExamples[i][1]}
                </Alert>
            );
        }

        switch(layout) {
            case 'p':
                return (
                    <Row className={classes.LessonContent}>
                        <Col md='6'>
                            <div className={classes.LessonCommentary}>
                            <Interweave tagName="div" content={this.state.lessonCommentary}/>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className={classes.LessonExamples}>
                                {displayExamples}
                            </div>
                        </Col>
                    </Row>
                );
            case 'l':
                return (
                    <Row className={classes.LessonContent}>
                        <Col md='12'>
                            <div className={classes.LessonCommentary}>
                            <Interweave tagName="div" content={this.state.lessonCommentary}/>
                            </div>
                        </Col>
                        <Col md='12'>
                            <div className={classes.LessonExamples}>
                                {displayExamples}
                            </div>
                        </Col>
                    </Row>
                );
            case 'n':
                return (
                    <Row className={classes.LessonContent}>
                        <Col md='12'>
                            <div className={classes.LessonCommentary}>
                            <Interweave tagName="div" content={this.state.lessonCommentary}/>
                            </div>
                        </Col>
                    </Row>
                );
            default:
                return (
                    <Row className={classes.LessonContent}>
                        <Col md='12'>
                            <div className={classes.LessonCommentary}>
                            <Interweave tagName="div" content={this.state.lessonCommentary}/>
                            </div>
                        </Col>
                    </Row>
                );
        }
    }

    render() {

        let lessonNumber = this.props.chosenLesson === 0 ? 'Introduction' : 'Lesson ' + this.props.chosenLesson;

        return (
            <div className={classes.Lesson}>
                <Container fluid>
                    <Row className={classes.LessonHeader}>
                        <Col>
                            <h1>{lessonNumber} - {this.props.chosenLessonName}</h1>        
                        </Col>
                    </Row>
                    {!this.state.loading ? this.setLayout(this.props.chosenLessonLayout) : <Spinner/>}
                    <Row>
                        <Col>
                            <Button
                                to='/lesson'
                                className={classes.LessonButton}
                                color='warning'
                                size='md'
                                disabled={this.props.chosenLesson === 0}
                                onClick={() => {
                                    // this.getNewLessonDetails(this.props.chosenLesson - 1);
                                    this.handleLessonChoice(this.props.chosenLesson - 1);
                                }}>
                                    Previous lesson
                                </Button>
                            <Button className={classes.LessonButton} color='warning'>
                                <Link to='/lessonsection' onClick={() => this.handleLessonSectionChoice(this.props.sectionForChosenLesson)} style={{ textDecoration: 'none', color: 'black' }}>
                                    Back to Lesson Section
                                </Link>
                            </Button>        
                            <Button
                                to='/lesson'
                                className={classes.LessonButton}
                                color='warning'
                                size='md'
                                disabled={this.props.chosenLesson === 95}
                                onClick={() => {
                                    this.handleLessonChoice(this.props.chosenLesson + 1);
                                }}>
                                    Next lesson
                                </Button>
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
        chosenLesson: state.reducer.chosenLesson,
        chosenLessonName: state.reducer.chosenLessonName,
        chosenLessonCommentaryID: state.reducer.chosenLessonCommentaryID,
        chosenLessonLayout: state.reducer.chosenLessonLayout,
        sectionForChosenLesson: state.reducer.sectionForChosenLesson
    }
};

const mapDispatchToProps = dispatch => ({
    setLesson: chosenLesson => dispatch(setLesson(chosenLesson)),
    setLessonSection: chosenLessonSection => dispatch(setLessonSection(chosenLessonSection)),
    setLessonName: chosenLessonName => dispatch(setLessonName(chosenLessonName)),
    setLessonCommentaryID: chosenLessonCommentaryID => dispatch(setLessonCommentaryID(chosenLessonCommentaryID)),
    setLessonLayout: chosenLessonLayout => dispatch(setLessonLayout(chosenLessonLayout)),
    setSectionForChosenLesson: sectionForChosenLesson => dispatch(setSectionForChosenLesson(sectionForChosenLesson))
});

export default connect (mapStateToProps, mapDispatchToProps) (Lesson);