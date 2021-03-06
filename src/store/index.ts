import { combineReducers, createStore, } from "redux";
import rootReducer from 'reducers/rootReducer';
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import RootState from "types";


export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;