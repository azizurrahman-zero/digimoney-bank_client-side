import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
    loading:false,
    checkUser:{},
    errors:''
}
export const fetchApprovedUser=createAsyncThunk('approveduser/fetchUsers',({email},{dispatch,getState})=>{    

    return axios.get(`https://tranquil-lake-95777.herokuapp.com/checkuser${email}`).then(res=>res.data)
 })

const approvedUserSlice=createSlice({
    name:"review",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchApprovedUser.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchApprovedUser.fulfilled,(state,action)=>{
            state.loading=false 
            state.checkUser=action.payload 
            state.errors=""
        })
        builder.addCase(fetchApprovedUser.rejected,(state,action)=>{
            state.loading=false 
            state.checkUser=[]
            state.errors=action.error.message
        })
    }
})

export default approvedUserSlice.reducer