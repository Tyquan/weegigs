import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    gigs: [],
    status: 'idle',
    error: null
};

export const fetchGigs = createAsyncThunk('gigs/fetchGigs', async () => {
    const res = await axios.get(POSTS_URL);
    return res.data;
});

export const addNewGig = createAsyncThunk('gigs/addNewGig', async (initialGig) => {
    const res = await axios.post(POSTS_URL, initialGig);
    return res.data;
});

export const updateGig = createAsyncThunk('gigs/updateGig', async (initialGig) => {
    try {
        const res = await axios.put(`${POST_URL}/${id}`);
        if (res?.status === 200) return initialGig;
        return `${res?.status}: ${res.statusText}`;
    } catch (error) {
        return err.message;
    }
});

const gigSlice = createSlice({
    name: 'gigs',
    initialState,
    reducers: {
        gigAdded: {
            reducer(state, action) {
                state.gigs.push(action.payload);
            },
            prepare(title, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        creationDate: new Date().toString(),
                        userId,
                        applications: []
                    }
                };
            }
        },
        applicationAdded(state, action) {
            const { gigId, application } = action.payload;
            const existingGig = state.gigs.find(gig => gig._id === gigId);
            if (existingGig) {
                existingGig.applications.push(application);
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchGigs.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchGigs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                let min = 1;
                const loadedGigs = action.payload.map(gig => {
                    gig.creationDate = sub(new Date(), { minutes: min++ }).toISOString();
                    return gig;
                });
                state.gigs = state.gigs.concat(loadedGigs);
            })
            .addCase(fetchGigs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewGig.fulfilled, (state, action) => {
                const sortedGigs = state.gigs.sort((a, b) => {
                    if (a._id > b._id) return 1;
                    if (a._id < b._id) return -1;
                    return 0;
                });
                action.payload._id = sortedGigs[sortedGigs.length - 1]._id + 1;

                action.payload.userId = Number(action.payload.userId);
                action.payload.creationDate = new Date().toString();

                state.gigs.push(action.payload);
            })
    }
});

export const selectAllGigs = (state) => state.gigs.gigs;
export const getGigsStatus = (state) => state.gigs.status;
export const getGigsError = (state) => state.gigs.error;

export const { gigAdded, applicationAdded } = gigSlice.actions;

export default gigSlice.reducer;


/*
const initialState = [
    {_id: 1, userId: 1, title: "Test Gig 1", company: "Facebook", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 2, userId: 2, title: "Test Gig 2", company: "Maker", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 3, userId: 3, title: "Test Gig 3", company: "Google", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 4, userId: 1, title: "Test Gig 4", company: "Netflix", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 5, userId: 2, title: "Test Gig 5", company: "IBM", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 6, userId: 3, title: "Test Gig 6", company: "Verizon", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
];
*/