import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        //Adds a new topic
        addTopic: (state, action) => {
            const newTopic = { 
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
            state.topics[action.payload.id] = newTopic;
        },
        //Adds a quizz to a specific topic
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id); // dans ce cas payload id fait ref a l'id du quizz.
        }
    }
});

export const selectTopics = state => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
  