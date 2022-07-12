import { createSlice } from "@reduxjs/toolkit";

const initialState = { ques: {}, score: 0 };

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		resetScore: (state) => {
			state.score = 0;
		},
		setScore: (state, action) => {
			state.score = action.payload;
		},
		setQuiz: (state, action) => {
			state.ques.quiz = action.payload;
		},
		setQues: (state, action) => {
			state.ques = action.payload;
		},
	},
});

export const { resetScore, setQuiz, setQues, setScore } = categorySlice.actions;

export default categorySlice.reducer;
