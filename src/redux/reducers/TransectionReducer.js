import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
    loading:false,
    transection:[],
    errors:''
}
export const fetchTransection=createAsyncThunk('transection/fetchUsers',({accountNumber,page},{dispatch,getState})=>{    

    return axios.get(`http://localhost:4000/transection/${accountNumber}?page=${page}`).then(res=>res.data)
 })

const userTransectionSlice=createSlice({
    name:"review",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTransection.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchTransection.fulfilled,(state,action)=>{
            state.loading=false 
            state.transection=action.payload 
            state.errors=""
        })
        builder.addCase(fetchTransection.rejected,(state,action)=>{
            state.loading=false 
            state.transection=[]
            state.errors=action.error.message
        })
    }
})

export default userTransectionSlice.reducer