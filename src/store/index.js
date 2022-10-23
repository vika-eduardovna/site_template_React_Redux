import {combineReducers, createStore} from 'redux'
import { reviewsReducer } from './reducer/reviewsReducer';
import { servicesReducer } from './reducer/servicesReducer';

const rootReducer = combineReducers({
    reviews: reviewsReducer,
    services: servicesReducer
})

export const store = createStore(rootReducer);