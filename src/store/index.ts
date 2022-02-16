import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//reducers
import newsReducer from "store/news/reducer";

const routeReducer = combineReducers({
  newsReducer: newsReducer,
});

const store = createStore(
  routeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;