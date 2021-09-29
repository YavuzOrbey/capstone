import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import userReducer from './features/user/userSlice';
import questionReducer from './features/question/questionSlice'
export const store =  configureStore({ //Redux store needs to have a single root reducer function passed in when created 
    reducer: {
      counter: counterReducer,
      user: userReducer, //usersReducer is a slice reducer function
      question: questionReducer
    }
  })
export type RootState = ReturnType<typeof store.getState>