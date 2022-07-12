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
		updateUserClick: (state, action) => {
			state.ques.quiz.map((quest) =>
				quest.options.map((ans) =>
					ans.id === action.payload ? (ans.isClick = true) : ans
				)
			);
		},
	},
});

export const { resetScore, setQuiz, setQues, setScore, updateUserClick } =
	categorySlice.actions;

export default categorySlice.reducer;
