import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init'
const initialState={
    loading:false,
    transection:[],
    errors:''
}
export const fetchTransection=createAsyncThunk('transection/fetchUsers',({accountNumber,page},{dispatch,getState})=>{    

    return axios.get(`https://tranquil-lake-95777.herokuapp.com/transection/${accountNumber}?page=${page}`,{
        method:"GET",
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.data)
 })

 export const isForbidden=(errors)=>{
    const checked=errors.includes("403")
    if(checked){
      return   signOut(auth)
    }
 }

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