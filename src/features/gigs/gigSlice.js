import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {_id: 1, userId: 1, title: "Test Gig 1", company: "Facebook", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 2, userId: 2, title: "Test Gig 2", company: "Maker", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 3, userId: 3, title: "Test Gig 3", company: "Google", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 4, userId: 1, title: "Test Gig 4", company: "Netflix", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 5, userId: 2, title: "Test Gig 5", company: "IBM", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
    {_id: 6, userId: 3, title: "Test Gig 6", company: "Verizon", creationDate: sub(new Date(), { minutes: 10 }).toString(), applications: [] },
];

const gigSlice = createSlice({
    name: 'gigs',
    initialState,
    reducers: {
        gigAdded: {
            reducer(state, action) {
                state.push(action.payload);
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
            const existingGig = state.find(gig => gig._id === postId);
            if (existingGig) {
                existingGig.applications.push(application);
            }
        }
    }
});

export const selectAllGigs = (state) => state.gigs;

export const { gigAdded, applicationAdded } = gigSlice.actions;

export default gigSlice.reducer;