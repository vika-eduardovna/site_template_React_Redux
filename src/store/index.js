import {combineReducers, createStore} from 'redux'
import { reviewsReducer } from './reducer/reviewsReducer';

const rootReducer = combineReducers({
    reviews: reviewsReducer
})

export const store = createStore(rootReducer);