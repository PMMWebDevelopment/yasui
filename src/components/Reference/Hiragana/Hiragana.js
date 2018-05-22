import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import {
    setLesson,
    setLessonSection,
    setLessonName,
    setLessonCommentaryID,
    setLessonLayout,
    setSectionForChosenLesson
} from '../../../store/actions';
import { Link } from 'react-router-dom';
import classes from './Hiragana.css';

class Hiragana extends Component {

    handleLessonChoice(chosenLesson) {
        this.props.setLesson(chosenLesson);
        this.props.setLessonSection(1);
        this.props.setLessonName('Hiragana');
        this.props.setLessonCommentaryID('CMybGU4c');
        this.props.setLessonLayout('p');
        this.props.setSectionForChosenLesson(1);
    }

    render () {

        return (
            <div className={classes.Hiragana}>
                <Container fluid>
                    <Row className={classes.HiraganaHeader}>
                        <Col>
                            <h1>Hiragana</h1>
                        </Col>
                    </Row>
                    <Row className={classes.HiraganaContent}>
                        <Col>
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>a</th>
                                    <th>i</th>
                                    <th>u</th>
                                    <th>e</th>
                                    <th>o</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Plain vowel</th>
                                    <td><b>あ</b> <i>a</i></td>
                                    <td><b>い</b> <i>i</i></td>
                                    <td><b>う</b> <i>u</i></td>
                                    <td><b>え</b> <i>e</i></td>
                                    <td><b>お</b> <i>o</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">k</th>
                                    <td><b>か</b> <i>ka</i></td>
                                    <td><b>き</b> <i>ki</i></td>
                                    <td><b>く</b> <i>ku</i></td>
                                    <td><b>け</b> <i>ke</i></td>
                                    <td><b>こ</b> <i>ko</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">s</th>
                                    <td><b>さ</b> <i>sa</i></td>
                                    <td><b>し</b> <i>shi</i></td>
                                    <td><b>す</b> <i>su</i></td>
                                    <td><b>せ</b> <i>se</i></td>
                                    <td><b>そ</b> <i>so</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">t</th>
                                    <td><b>た</b> <i>ta</i></td>
                                    <td><b>ち</b> <i>chi</i></td>
                                    <td><b>つ</b> <i>tsu</i></td>
                                    <td><b>て</b> <i>te</i></td>
                                    <td><b>と</b> <i>to</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">n</th>
                                    <td><b>な</b> <i>na</i></td>
                                    <td><b>に</b> <i>ni</i></td>
                                    <td><b>ぬ</b> <i>nu</i></td>
                                    <td><b>ね</b> <i>ne</i></td>
                                    <td><b>の</b> <i>no</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">h</th>
                                    <td><b>は</b> <i>ha / wa</i></td>
                                    <td><b>ひ</b> <i>hi</i></td>
                                    <td><b>ふ</b> <i>hu</i></td>
                                    <td><b>へ</b> <i>he</i></td>
                                    <td><b>ほ</b> <i>ho</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">m</th>
                                    <td><b>ま</b> <i>ma</i></td>
                                    <td><b>み</b> <i>mi</i></td>
                                    <td><b>む</b> <i>mu</i></td>
                                    <td><b>め</b> <i>me</i></td>
                                    <td><b>も</b> <i>mo</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">y</th>
                                    <td><b>や</b> <i>ya</i></td>
                                    <td></td>
                                    <td><b>ゆ</b> <i>yu</i></td>
                                    <td></td>
                                    <td><b>よ</b> <i>yo</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">r</th>
                                    <td><b>ら</b> <i>ra</i></td>
                                    <td><b>り</b> <i>ri</i></td>
                                    <td><b>る</b> <i>ru</i></td>
                                    <td><b>れ</b> <i>re</i></td>
                                    <td><b>ろ</b> <i>ro</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">w</th>
                                    <td><b>わ</b> <i>wa</i></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><b>を</b> <i>wo / o</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">Other marks</th>
                                    <td><b>"Small" っ</b> doubles subsequent consonant</td>
                                    <td><b>ゝ</b> repeats preceding syllable</td>
                                    <td><b>゛</b> k => g / h => b / s => z / t => d</td>
                                    <td><b>゜</b> h => p</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className={classes.HiraganaButton} color='warning'>
                                <Link to='/reference' style={{ textDecoration: 'none', color: 'black' }}>
                                        Back to Reference Section
                                </Link>
                            </Button>
                            <Button className={classes.HiraganaButton} color='warning'>
                                <Link to='/lesson' style={{ textDecoration: 'none', color: 'black' }}
                                onClick={() => {
                                    this.handleLessonChoice(2);
                                }}>
                                        Back to Hiragana Lesson
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
       );
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

export default connect(mapStateToProps, mapDispatchToProps)(Hiragana);