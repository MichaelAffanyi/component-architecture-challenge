import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: "page_1",
    profile: null,
}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setPage: (state, {payload}) => {
            state.page = payload;
        },
        setProfile: (state, {payload}) => {
            state.profile = payload;
        },
    }
});

export const { setPage, setProfile } = pageSlice.actions;
export default pageSlice.reducer;