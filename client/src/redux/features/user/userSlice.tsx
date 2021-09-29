import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const slice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
    },
    reducers: {
        changeUser: (state, action) =>{
            state.currentUser = action.payload;
        },
        logoutUser: state=> {
            state.currentUser = null
        }
    }
})

export const {changeUser, logoutUser} = slice.actions;

export const selectUser = (state: RootState):{email: string, isAdmin: boolean} | null => state.user.currentUser;

export default slice.reducer;