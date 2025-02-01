import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    admin_authenticated: false
}

const Redux_functions = createSlice({
    name: "Redux_functions",
    initialState,
    reducers: {
        handleAuthentication: (state, action) => {
            state.admin_authenticated = action.payload;
        }
    }
})

export const { handleAuthentication } = Redux_functions.actions;
export default Redux_functions.reducer;