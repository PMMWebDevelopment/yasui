import React, { Component } from 'react';
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import * as jpconjugation from 'jp-conjugation';
import classes from './VerbCharts.css';
import Spinner from '../../UI/Spinner';

class VerbCharts extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          verbs: [],
          verbListDropdownItems: [],
          chosenVerb: [],
          chosenVerbParadigm: {},
          loading: false
        };
      }

    componentDidMount() {
        this.getVerbList();
    }
    
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    getVerbList() {
        this.setState({loading: true});
        const verbList = [];
        axios.get('https://yasui-pmm.firebaseio.com/verbs.json')
            .then(response => {
                this.setState({loading: false});
                for (let i = 0; i < Object.keys(response.data).length; i += 1) {
                    let verbDictionaryForm = response.data[i].dict;
                    let verbEnglish = response.data[i].en;
                    let verbGroup = response.data[i].group;
                    let verbHiragana = response.data[i].hira;
                    let verbRomaji = response.data[i].romaji;
                    let verb = [
                        i,
                        verbDictionaryForm,
                        verbEnglish,
                        verbGroup,
                        verbHiragana,
                        verbRomaji
                    ];
                    verbList.push(verb);
                }
                this.setState({verbs: verbList});
                this.setVerbListDropdownItems();
            })
            .catch(error => console.log(error));
    }

    setVerbListDropdownItems() {
        const verbListDropdownItems = []; 
        for (let i = 0; i < this.state.verbs.length; i += 1) {
            verbListDropdownItems.push(
                <DropdownItem onClick={() => this.handleVerbChoice(this.state.verbs[i][0])} key={this.state.verbs[i][0]}>{this.state.verbs[i][1]} - <i>{this.state.verbs[i][5]}</i> - {this.state.verbs[i][2]}</DropdownItem>
            );
        }
        this.setState({verbListDropdownItems: verbListDropdownItems});
    }

    handleVerbChoice(chosenVerb){
        this.setState({chosenVerb: this.state.verbs[chosenVerb]});
    }

    render() {                                                                                                       
        let chosenVerbTitle = null;
        let paradigmLayout = null;
        if (this.state.chosenVerb.length === 0) {
            chosenVerbTitle = 'Please choose a verb from the dropdown list on the left';
        } else {

            chosenVerbTitle = 
                <h5>
                    <b>{this.state.chosenVerb[1]}</b> - <i>{this.state.chosenVerb[5]}</i> - {this.state.chosenVerb[2]}
                </h5>;
            const paradigm = jpconjugation.conjugate(this.state.chosenVerb[1], this.state.chosenVerb[3]);
            console.log(paradigm);
            paradigmLayout =
                <div> 
                    <Row className={classes.SubRow}>
                        <Col lg="2">
                            <div>
                                <p>INFINITIVE: {paradigm[44].form}<br/>
                                GERUND: {paradigm[38].form}<br/>
                                POTENTIAL: {paradigm[35].form}<br/>
                                PASSIVE: {paradigm[33].form}<br/></p>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className={classes.Tenses}>
                                <h6>PRESENT TENSE</h6>
                                <table>
                                    <tbody>
                                        <tr><th></th><th>Plain</th><th>Polite</th></tr>
                                        <tr><td>+</td><td>{this.state.chosenVerb[1]}</td><td>{paradigm[26].form}</td></tr>
                                        <tr><td>-</td><td>{paradigm[22].form}</td><td>{paradigm[10].form}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className={classes.Tenses}>
                                <h6>PAST TENSE</h6>
                                <table>
                                    <tbody>
                                        <tr><th></th><th>Plain</th><th>Polite</th></tr>
                                        <tr><td>+</td><td>{paradigm[42].form}</td><td>{paradigm[16].form}</td></tr>
                                        <tr><td>-</td><td>{paradigm[5].form}</td><td>{paradigm[1].form}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className={classes.Tenses}>
                                <h6>COMMANDS / REQUESTS</h6>
                                <table>
                                    <tbody>
                                        <tr><th></th><th>Plain</th><th>Polite</th></tr>
                                        <tr><td>+</td><td>{paradigm[43].form}</td><td>{paradigm[2].form}</td></tr>
                                        <tr><td>-</td><td>{paradigm[41].form}</td><td>{paradigm[0].form}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row className={classes.SubRow}>
                        <Col lg="2">
                            <div>
                                <p>CONDITIONAL: {paradigm[39].form}<br/>
                                CAUSATIVE: {paradigm[32].form}<br/>
                                CAUSATIVE PASSIVE:<br/>{paradigm[4].form}</p>
                            </div>
                        </Col>
                         <Col lg="3">
                            <div className={classes.Tenses}>
                                <h6>PRESUMPTIVE MOOD</h6>
                                <table>
                                    <tbody>
                                        <tr><th></th><th>Plain</th><th>Polite</th></tr>
                                        <tr><td>+</td><td>{paradigm[17].form}</td><td>{paradigm[3].form}</td></tr>
                                        <tr><td>-</td><td>{paradigm[28].form}</td><td>{paradigm[7].form}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className={classes.Tenses}>
                                <h6>PSEUDO-FUTURE</h6>
                                <table>
                                    <tbody>
                                        <tr><td>shortly …ing</td><td>{paradigm[36].form}</td><td>…prepare(s) to…</td><td>{paradigm[21].form}</td></tr>
                                        <tr><td>going to…</td><td>{paradigm[20].form}</td><td>…prepare(s) to…
                                        </td><td>{paradigm[13].form}</td></tr>
                                        <tr><td>I want to..</td><td>{paradigm[34].form}</td><td>…want(s) to…</td><td>{paradigm[14].form}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className={classes.Tenses}>
                                <h6>OTHER FORMS</h6>
                                <table>
                                    <tbody>
                                        <tr><td>…do(es) this then…</td><td>{paradigm[40].form}</td><td>…do(es) things like…</td><td>{paradigm[25].form}</td></tr>
                                        <tr><td>Way of …ing</td><td>{paradigm[27].form}</td><td>…do(es) X for…
                                        </td><td>{paradigm[11].form}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            + = Affirmative | - = Negative
                        </Col>
                    </Row>
                </div>
        }


        return (
            <div className={classes.VerbCharts}>
                <Container fluid>
                    <Row className={classes.VerbChartsHeader}>
                        <Col>
                            <h1>Verb Charts</h1>        
                        </Col>
                    </Row>
                    <Row className={classes.VerbChartsSubHeader}>                    
                        <Col>
                            <div className={classes.VerbChartsMessage}>
                                <p>Use the dropdown menu to choose a verb and call up its main forms</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={classes.VerbChartsRow1}>
                        <Col lg="2">
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle color='warning' caret>
                                Click here for verb list
                            </DropdownToggle>
                            <DropdownMenu
                                modifiers={{
                                setMaxHeight: {
                                    enabled: true,
                                    order: 890,
                                    fn: (data) => {
                                    return {
                                        ...data,
                                        styles: {
                                        ...data.styles,
                                        overflow: 'auto',
                                        maxHeight: 300,
                                        },
                                    };
                                    },
                                },
                                }}
                            >
                                {this.state.verbListDropdownItems}
                            </DropdownMenu>
                            </ButtonDropdown>       
                        </Col>
                        <Col lg="10">
                            {chosenVerbTitle}
                        </Col>
                    </Row>
                    <Row className={classes.VerbChartsRow2}>
                        <Col>
                            {/* Try and extract this to separate component */}
                                {!this.state.loading ? paradigmLayout : <Spinner/>}
                            {/* End of extractable component */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }   
}

export default VerbCharts;