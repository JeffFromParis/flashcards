import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
      // Add initial state properties here.
      topics: {}
    },
    reducers: {
      addTopic: (state,action) => {
        //Creating the new topic based on the payload
        const newTopic = {
          id: action.payload.id,
          name: action.payload.name,
          icon: action.payload.icon,
          quizId: []
        }
        //adding that topic to the state
        state.topics[action.payload.id] = newTopic;
      }
    }
  });

  export const selectTopics = (state) => state.topics.topics;
  export const { addTopic } = topicsSlice.actions;
  export default topicsSlice.reducers;
  