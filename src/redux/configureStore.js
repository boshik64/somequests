import { applyMiddleware, createStore } from "redux";
import { photosReducer } from "./reducer/photosReducer";
import thunk from "redux-thunk";



export const store = createStore(photosReducer, applyMiddleware(thunk));
