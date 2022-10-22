import { configureStore } from '@reduxjs/toolkit';
import gigsReducer from '../features/gigs/gigsSlice';
import usersReducer from '../features/users/userSlice';

export default configureStore({
    reducer: {
        gigs: gigsReducer,
        users: usersReducer
    },
})