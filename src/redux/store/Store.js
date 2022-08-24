import {configureStore} from '@reduxjs/toolkit';
import ReviewReducer from  '../reducers/ReviewReducer'
import TransectionReducer from  '../reducers/TransectionReducer'

export default configureStore({
    reducer:{
        reviews:ReviewReducer,
        transection:TransectionReducer,
    }
})