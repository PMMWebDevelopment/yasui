import React from 'react';
import classes from './Footer.css';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <h5>Website design by P M Meddings using <a href='https://reactjs.org/' target='_blank'>ReactJS</a>. Example sentences based on material from the <a href='https://tatoeba.org/eng/' target='_blank'>Tatoeba Project</a> and <a href='https://www.manythings.org/anki/' target='_blank'>Anki Project</a>. This site is intended as a free educational tool.</h5>
        </div>
    )
}

export default footer;