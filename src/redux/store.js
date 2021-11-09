import { combineReducers, createStore } from "redux";
import productsReducer from "./products-reducer";
import carouselReducer from "./carouselNewItems-reducer";

let reducers = combineReducers({
    productsReducer,
    carouselReducer
})

let store = createStore(reducers);

window.store = store

export default store;