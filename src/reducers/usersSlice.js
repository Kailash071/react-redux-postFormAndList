import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        name:'Kailash'
    },
    {
        id:2,
        name:'Kerrick'
    }
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})
export const useUsersSelector = state =>state.users;
// export {} = usersSlice.actions;
export default usersSlice.reducer;