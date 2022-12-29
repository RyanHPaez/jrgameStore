import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = "http://localhost:5000/motorcycles";
const initialState = {
    motorcylceData: [],
    status: "idle",
    error: ""
}

const options = {
    method: 'GET',
    url:  'https://motorcycle-specs-database.p.rapidapi.com/make',
    headers: {
      'X-RapidAPI-Key': '0cad2368e9msh95f4fabb4b67d62p1c2b24jsnf9d5ace85b52',
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
      'X-Ratelimit-Limit':'1ms'
    },
    

  };


//Fetch function to get all motorcycles from mock data
export const fetchMotoData = createAsyncThunk(
    'motorcycles/fetchMotorcycles',
  



axios.request(options,{ params:{_limit:5}}).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
})
       
 
    
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
