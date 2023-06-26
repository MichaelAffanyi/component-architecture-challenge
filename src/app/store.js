import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "reduxjs-toolkit-persist";
import pageReducer from "../feature/pageSlice";
import storage from "reduxjs-toolkit-persist/lib/storage";

const persistConfig = {
    key: "root",
    vesion: 1,
    storage,
};

const rootReducer = combineReducers({
    page: pageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: {
        page: persistedReducer,
    },
});
