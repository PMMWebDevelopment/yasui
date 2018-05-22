import { combineReducers } from 'redux';
import {
    SET_LESSON_SECTION,
    SET_LESSON,
    SET_LESSON_NAME,
    SET_LESSON_COMMENTARY_ID,
    SET_LESSON_LAYOUT,
    SET_SECTION_FOR_CHOSEN_LESSON
} from './actions';

const initialState = {
    chosenLessonSection: 1,
    chosenLesson: 0,
    chosenLessonName: 'Japanese writing in general',
    chosenLessonCommentaryID: 'b1pV09UM',
    chosenLessonLayout: 'n',
    sectionForChosenLesson: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LESSON_SECTION:
        return {...state, chosenLessonSection: action.chosenLessonSection};  
      case SET_LESSON:
        return {...state, chosenLesson: action.chosenLesson};
      case SET_LESSON_NAME:
        return {...state, chosenLessonName: action.chosenLessonName};
      case SET_LESSON_COMMENTARY_ID:
        return {...state, chosenLessonCommentaryID: action.chosenLessonCommentaryID};
      case SET_LESSON_LAYOUT:
        return {...state, chosenLessonLayout: action.chosenLessonLayout};
      case SET_SECTION_FOR_CHOSEN_LESSON:
        return {...state, sectionForChosenLesson: action.sectionForChosenLesson};
      default:
        return state;
    }
  };

const yasuiReducers = combineReducers({
  reducer
});
  
export default yasuiReducers;