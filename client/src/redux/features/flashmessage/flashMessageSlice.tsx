import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store'
export const slice = createSlice({
  name: 'flashMessage',
  initialState: {
    message: {
      type: null,
      text: null
    }
  },
  reducers: {
    changeMessage: (state, action) =>{
        state.message = action.payload;
    },
    clearMessage: state => {
      state.message = {type:null, text: null}
    }
  },
});
export const {changeMessage, clearMessage} = slice.actions;

export const selectMessage = (state: RootState) => state.flashMessage.message;
export default slice.reducer;