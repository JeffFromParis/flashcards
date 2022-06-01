import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuizz: (state, action) => {
            const newQuizz = { 
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardsId: action.payload.cardsId
            }
            state.quizzes[action.payload.id] = newQuizz;
        },
    }
});

// thunk to quizz to the related topic
//The payload is here a quizz object
export const addQuizThunk = payload => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuizz(payload));
        dispatch(addQuizId( { id: payload.id, topicId: payload.topicId } ));
    }
};

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuizz } = quizzesSlice.actions;
export default quizzesSlice.reducer;