import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
    { id: 0, email: "test1@test.com", creationDate: sub(new Date(), { minutes: 10 }).toString() },
    { id: 1, email: "test2@test.com", creationDate: sub(new Date(), { minutes: 10 }).toString() },
    { id: 2, email: "test3@test.com", creationDate: sub(new Date(), { minutes: 10 }).toString() }
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;