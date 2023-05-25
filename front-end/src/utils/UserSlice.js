import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
    name:'user',
    initialState:{
        name:'',
        email:'',
        phone:'',
        profileImage:'',

    },
    reducers:{
        setUserProfile : (state,action)=>{
        console.log(action);
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.profileImage = action.payload.profileImage
        }
    }
})

export const {setUserProfile} = userDetails.actions;

export default userDetails.reducer;