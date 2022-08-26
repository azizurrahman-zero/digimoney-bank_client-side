import {configureStore} from '@reduxjs/toolkit';
import ReviewReducer from  '../reducers/ReviewReducer'
import TransectionReducer from  '../reducers/TransectionReducer'
import ApprovedUserSlice from '../reducers/ApprovedUsersReducers'
import BlogSlice from '../reducers/BlogSlice'

export default configureStore({
    reducer:{
        reviews:ReviewReducer,
        transection:TransectionReducer,
        checkUser:ApprovedUserSlice,
        blogs:BlogSlice
    }
})