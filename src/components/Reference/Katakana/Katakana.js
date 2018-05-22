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
import classes from './Katakana.css';

class Katakana extends Component {

    handleLessonChoice(chosenLesson) {
        this.props.setLesson(chosenLesson);
        this.props.setLessonSection(1);
        this.props.setLessonName('Katakana');
        this.props.setLessonCommentaryID('ATkf7ATw');
        this.props.setLessonLayout('p');
        this.props.setSectionForChosenLesson(1);
    }

    render() {
        return (
            <div className={classes.Katakana}>
                <Container fluid>
                    <Row className={classes.KatakanaHeader}>
                        <Col>
                            <h1>Katakana</h1>
                        </Col>
                    </Row>
                    <Row className={classes.KatakanaContent}>
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
                                    <td><b>ア</b> <i>a</i></td>
                                    <td><b>イ</b> <i>i</i></td>
                                    <td><b>ウ</b> <i>u</i></td>
                                    <td><b>エ</b> <i>e</i></td>
                                    <td><b>オ</b> <i>o</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">k</th>
                                    <td><b>カ</b> <i>ka</i></td>
                                    <td><b>キ</b> <i>ki</i></td>
                                    <td><b>ク</b> <i>ku</i></td>
                                    <td><b>ケ</b> <i>ke</i></td>
                                    <td><b>コ</b> <i>ko</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">s</th>
                                    <td><b>サ</b> <i>sa</i></td>
                                    <td><b>シ</b> <i>shi</i></td>
                                    <td><b>ス</b> <i>su</i></td>
                                    <td><b>セ</b> <i>se</i></td>
                                    <td><b>ソ</b> <i>so</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">t</th>
                                    <td><b>タ</b> <i>ta</i></td>
                                    <td><b>チ</b> <i>chi</i></td>
                                    <td><b>ツ</b> <i>tsu</i></td>
                                    <td><b>テ</b> <i>te</i></td>
                                    <td><b>ト</b> <i>to</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">n</th>
                                    <td><b>ナ</b> <i>na</i></td>
                                    <td><b>ニ</b> <i>ni</i></td>
                                    <td><b>ヌ</b> <i>nu</i></td>
                                    <td><b>ネ</b> <i>ne</i></td>
                                    <td><b>ノ</b> <i>no</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">h</th>
                                    <td><b>ハ</b> <i>ha</i></td>
                                    <td><b>ヒ</b> <i>hi</i></td>
                                    <td><b>フ</b> <i>hu</i></td>
                                    <td><b>へ</b> <i>he</i></td>
                                    <td><b>ホ</b> <i>ho</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">m</th>
                                    <td><b>マ</b> <i>ma</i></td>
                                    <td><b>ミ</b> <i>mi</i></td>
                                    <td><b>ム</b> <i>mu</i></td>
                                    <td><b>メ</b> <i>me</i></td>
                                    <td><b>モ</b> <i>mo</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">y</th>
                                    <td><b>ヤ</b> <i>ya</i></td>
                                    <td></td>
                                    <td><b>ユ</b> <i>yu</i></td>
                                    <td></td>
                                    <td><b>ヨ</b> <i>yo</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">r</th>
                                    <td><b>ラ</b> <i>ra</i></td>
                                    <td><b>リ</b> <i>ri</i></td>
                                    <td><b>ル</b> <i>ru</i></td>
                                    <td><b>レ</b> <i>re</i></td>
                                    <td><b>ロ</b> <i>ro</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">w</th>
                                    <td><b>ワ</b> <i>wa</i></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><b>ヲ</b> <i>wo</i></td>
                                </tr>
                                <tr>
                                    <th scope="row">Other marks</th>
                                    <td><b>"Small" ッ</b> doubles subsequent consonant</td>
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
                            <Button className={classes.KatakanaButton} color='warning'>
                                <Link to='/reference' style={{ textDecoration: 'none', color: 'black' }}>
                                        Back to Reference Section
                                </Link>
                            </Button>
                            <Button className={classes.KatakanaButton} color='warning'>
                                <Link to='/lesson' style={{ textDecoration: 'none', color: 'black' }}
                                onClick={() => {
                                    this.handleLessonChoice(3);
                                }}>
                                        Back to Katakana Lesson
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

export default connect(mapStateToProps, mapDispatchToProps)(Katakana);