import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
    setLesson,
    setLessonName,
    setLessonSection,
    setLessonCommentaryID,
    setLessonLayout,
    setSectionForChosenLesson
} from '../../../store/actions';
import axios from 'axios';
import classes from './LessonSection.css';
import GrammarPointButton from './GrammarPointButton';

class LessonSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lessonsThisSection: [],
            startIDThisSection: 0,
            grammarPointButtons: []
        }
    }

    componentDidMount() {
        this.getLessons(this.props.chosenLessonSection);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.chosenLessonSection!==this.props.chosenLessonSection) {
            this.getLessons(nextProps.chosenLessonSection);
        }
     }
    
    getLessons(chosenLessonSection) {
        const grammarPointsThisSectionFromBackend = [];
        axios.get('https://yasui-pmm.firebaseio.com/grammar.json?orderBy="section"&equalTo=' + chosenLessonSection)
            .then(response => {
                let startID = +(Object.keys(response.data)[0]);
                this.setState({startIDThisSection: startID});
                let endID = (+(Object.keys(response.data)[0]) + (Object.keys(response.data).length - 1));
                for (let i = startID; i <= endID; i += 1) {
                    let grammarPointToPushName = response.data[i].grammarpoint;
                    let grammarPointToPushCommentaryID = response.data[i].commentary;
                    let grammarPointToPushLayout = response.data[i].layout;
                    let grammarPointToPushSection = response.data[i].section;
                    let grammarPointToPush = [
                        i,
                        grammarPointToPushName,
                        grammarPointToPushCommentaryID,
                        grammarPointToPushLayout,
                        grammarPointToPushSection
                    ];
                    grammarPointsThisSectionFromBackend.push(grammarPointToPush);
                }
                this.setState({lessonsThisSection: grammarPointsThisSectionFromBackend});
                this.setGrammarPointButtons();
            })
            .catch(error => {
                console.log(error);
            }
        );
    }
      
    setGrammarPointButtons() {
        const grammarPointButtonList = []; 
        for (let i = 0; i < this.state.lessonsThisSection.length; i+=1) {
            grammarPointButtonList.push(
                <GrammarPointButton onClick={() => this.handleLessonChoice(this.state.lessonsThisSection[i][0])} key={this.state.lessonsThisSection[i][0]} grammarpoint={this.state.lessonsThisSection[i][1]} />
            );
        }
        this.setState({grammarPointButtons: grammarPointButtonList});
    }

    handleLessonChoice(chosenLesson) {
        this.props.setLesson(chosenLesson);
        this.props.setLessonName(
            this.state.lessonsThisSection[chosenLesson - this.state.startIDThisSection][1]
        );
        this.props.setLessonCommentaryID(
            this.state.lessonsThisSection[chosenLesson - this.state.startIDThisSection][2]
        );
        this.props.setLessonLayout(
            this.state.lessonsThisSection[chosenLesson - this.state.startIDThisSection][3]
        )
        this.props.setSectionForChosenLesson(
            this.state.lessonsThisSection[chosenLesson - this.state.startIDThisSection][4]
        );
    }

    handleLessonSectionChoice(chosenLessonSection) {
        this.props.setLessonSection(chosenLessonSection);
    }
    
    render() {

        return (
            <div className={classes.LessonSection}>
                <Container fluid>
                    <Row className={classes.LessonSectionHeader}>
                        <Col>
                            <h1>Lesson Section {this.props.chosenLessonSection}</h1>        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={classes.LessonSectionContainer}>
                                {this.state.grammarPointButtons}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className={classes.LessonSectionButtons} color='warning' size='md' disabled={this.props.chosenLessonSection === 1} onClick={() => this.handleLessonSectionChoice(this.props.chosenLessonSection - 1)}>Previous section</Button>
                            <Button className={classes.LessonSectionButtons} color='warning' size='md' disabled={this.props.chosenLessonSection === 3} onClick={() => this.handleLessonSectionChoice(this.props.chosenLessonSection + 1)}>Next section</Button>
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
    setLessonName: chosenLessonName => dispatch(setLessonName(chosenLessonName)),
    setLessonCommentaryID: chosenLessonCommentaryID => dispatch(setLessonCommentaryID(chosenLessonCommentaryID)),
    setLessonSection: chosenLessonSection => dispatch(setLessonSection(chosenLessonSection)),
    setLessonLayout: chosenLessonLayout => dispatch(setLessonLayout(chosenLessonLayout)),
    setSectionForChosenLesson: sectionForChosenLesson => dispatch(setSectionForChosenLesson(sectionForChosenLesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonSection);