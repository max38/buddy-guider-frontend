import { createSlice } from "@reduxjs/toolkit";

export const suggestionSlice = createSlice({
    name: "suggestion",
    initialState: {
        suggestionRequestId: null,
    },
    reducers: {
        setSuggestionRequestInfo: (state, action) => {
            state.suggestionRequestId = action.payload.request_id;
            state.suggestionRequestPlace = action.payload.requested_place;
            state.suggestionRequestDays = action.payload.requested_days;
        }
    },
});

export const { setSuggestionRequestInfo } = suggestionSlice.actions;

export default suggestionSlice.reducer;
