export const SET_LESSON_SECTION = 'SET_LESSON_SECTION';
export const SET_LESSON = 'SET_LESSON';
export const SET_LESSON_NAME = 'SET_LESSON_NAME';
export const SET_LESSON_COMMENTARY_ID = 'SET_LESSON_COMMENTARY_ID';
export const SET_LESSON_LAYOUT = 'SET_LESSON_LAYOUT';
export const SET_SECTION_FOR_CHOSEN_LESSON = 'SET_SECTION_FOR_CHOSEN_LESSON';

export const setLessonSection = chosenLessonSection => {
    return {
        type: SET_LESSON_SECTION,
        chosenLessonSection
    }
}

export const setLesson = chosenLesson => {
    return {
        type: SET_LESSON,
        chosenLesson
    }
}

export const setLessonName = chosenLessonName => {
    return {
        type: SET_LESSON_NAME,
        chosenLessonName
    }
}

export const setLessonCommentaryID = chosenLessonCommentaryID => {
    return {
        type: SET_LESSON_COMMENTARY_ID,
        chosenLessonCommentaryID
    }
}

export const setLessonLayout = chosenLessonLayout => {
    return {
        type: SET_LESSON_LAYOUT,
        chosenLessonLayout
    }
}

export const setSectionForChosenLesson = sectionForChosenLesson => {
    return {
        type: SET_SECTION_FOR_CHOSEN_LESSON,
        sectionForChosenLesson
    }
}