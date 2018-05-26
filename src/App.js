import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import asyncComponent from './higherorder/asyncComponent/asyncComponent';
import classes from './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// import * as actions from './store/index';

const asyncLessons = asyncComponent(() => {
  return import('./components/Lessons/Lessons');
});

const asyncLessonSection = asyncComponent(() => {
  return import('./components/Lessons/LessonSections/LessonSection');
});

const asyncLesson = asyncComponent(() => {
  return import('./components/Lessons/LessonSections/Lesson');
});

const asyncReference = asyncComponent(() => {
  return import('./components/Reference/Reference');
});

const asyncVerbCharts = asyncComponent(() => {
  return import('./components/Reference/VerbCharts/VerbCharts');
});

// const asyncVerbCheatsheet = asyncComponent(() => {
//   return import('./components/Reference/VerbCheatsheet/VerbCheatsheet');
// });

const asyncHiragana = asyncComponent(() => {
  return import('./components/Reference/Hiragana/Hiragana');
});

const asyncKatakana = asyncComponent(() => {
  return import('./components/Reference/Katakana/Katakana');
});

const asyncSignupLogin = asyncComponent(() => {
  return import('./components/SignupLogin/SignupLogin');
});

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lessons" component={asyncLessons} />
        <Route path="/lessonsection" component={asyncLessonSection} />
        <Route path="/lesson" component={asyncLesson} />
        <Route path="/reference" component={asyncReference} />
        <Route path="/verbcharts" component={asyncVerbCharts} />
        {/* <Route path="/verbcheatsheet" component={asyncVerbCheatsheet} /> */}
        <Route path="/hiragana" component={asyncHiragana} />
        <Route path="/katakana" component={asyncKatakana} />
        <Route path="/signuplogin" component={asyncSignupLogin} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className={classes.App}>
          <Header />
          {routes}
          <Footer />        
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch( actions.authCheckState() )
//   };
// };

export default withRouter(App);
