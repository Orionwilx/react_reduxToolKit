import { configureStore } from '@reduxjs/toolkit'
import taskReducers from '../features/task/taskSlice'

export const store = configureStore({
    reducer: {
        task: taskReducers
    }
})