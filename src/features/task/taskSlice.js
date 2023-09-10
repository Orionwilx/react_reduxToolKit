import { createSlice } from "@reduxjs/toolkit"; 

const initialState = [
    {
        id: '1',
        title: 'title 1',
        description: 'description 1',
        complete: false 
    },
    {
        id: '2',
        title: 'title 2',
        description: 'description 2',
        complete: false 
    }
]


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    }
})

export default taskSlice.reducer