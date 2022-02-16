//types
import { Dispatch } from "redux";
import { IStore } from "./types";

import getNewsRu from "services/getNewsRu";

export const setNewsAction = (list: IStore['list']) => {
    return {
        type: 'news/setNews',
        payload: list
    }
}

export const loadNews = () => async (dispatch: Dispatch) => {
    try {
        const response = await getNewsRu('ru');
        dispatch(setNewsAction(response.data.articles))

    } catch (error) {
        console.log(error, 'Error loading news');
        
    }
}