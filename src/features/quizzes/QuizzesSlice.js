import { createSlice } from '@reduxjs/toolkit';

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

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuizz } = quizzesSlice.actions;
export default quizzesSlice.reducer;