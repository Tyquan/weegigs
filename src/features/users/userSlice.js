import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await axios.get(USERS_URL);
    return res.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;

/*

const initialState = [
    { _id: 0, email: "test1@test.com", creationDate: sub(new Date(), { minutes: 10 }).toString() },
    { _id: 1, email: "test2@test.com", creationDate: sub(new Date(), { minutes: 10 }).toString() },
    { _id: 2, email: "test3@test.com", creationDate: sub(new Date(), { minutes: 10 }).toString() }
];
*/