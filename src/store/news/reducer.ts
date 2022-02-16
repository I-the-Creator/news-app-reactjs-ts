//types
import { IStore } from "./types";
import { AnyAction } from "redux";

const initialState = {
    list: [],
}

const newsReducer = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'news/setNews':
            return {...state, list: [...action.payload]}
        default:
            return state;
    }
}

export default newsReducer;