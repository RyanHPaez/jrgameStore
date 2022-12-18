import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = "http://localhost:5000/motorcycles";
const initialState = {
    motorcylceData: [],
    status: "idle",
    error: ""
}

//Fetch function to get all motorcycles from mock data
export const fetchMotoData = createAsyncThunk(
    'motorcycles/fetchMotorcycles',
    async () => {
        try{ 
            const response = await axios.get(dataUrl,{
                params: {
                    _limit: 5
                  }
            });
            // The value we return becomes the `fulfilled` action payload
            return response.data;
        }catch(e){
            return e.message
        }
    }
    )

const motorcycleSlice = createSlice(
    {
        name: "motorcycles",
        initialState,
        extraReducers(builder){
            builder
                .addCase(fetchMotoData.pending, (state, action)=>{
                    state.status = 'loading'
                })
                .addCase(fetchMotoData.fulfilled, (state,action)=>{
                    state.status = 'succeeded'
                    state.motorcylceData = (action.payload)
                })
                .addCase(fetchMotoData.rejected, (state, action)=>{
                    state.status = "failed"
                    state.error = action.error.message
                })
        }
    }   
)

export const selectAllMotorcycles = (state) => state.motorcycles.motorcylceData
export const getMotorcyclesStatus = (state) => state.motorcycles.status
export const getMotorcyclesError = (state) => state.motorcycles.error


export default motorcycleSlice.reducer
