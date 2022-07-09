import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Структура пользователя
type user = {
	_id: string;
	_type: string;
	userName: string;
	name: string;
	secondName: string;
	image: string;
};

//Как выглядит стейт
type userState = {
	userProfile?: user;
	allUsers?: user[];
};

//Инитиал стейт
const initialState: userState = {
	userProfile: undefined,
    allUsers: undefined,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addUser(state, action: PayloadAction<user>) {
			state.userProfile = action
		},
	},
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
