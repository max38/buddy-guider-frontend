import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import suggestionSlice from "../features/suggestionSlice";


export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        suggestion: suggestionSlice,
    },
});
