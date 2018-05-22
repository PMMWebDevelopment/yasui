import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import classes from './GrammarPointButton.css';

const grammarPointButton = (props) => {
    return (
            <Button onClick={props.onClick} className={classes.GrammarPointButton} color='danger' size='md'>     
                <Link to='/lesson' style={{ textDecoration: 'none', color: 'white' }} grammarpoint={props.grammarpoint}>
                    {props.grammarpoint}
                </Link>
            </Button>
    )
}

export default grammarPointButton;

