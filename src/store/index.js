import {combineReducers, createStore} from 'redux'
import { reviewsReducer } from './reducer/reviewsReducer';
import { servicesReducer } from './reducer/servicesReducer';
import { aboutUsReducer } from './reducer/aboutUsReducer';


const rootReducer = combineReducers({
    reviews: reviewsReducer,
    services: servicesReducer,
    data: aboutUsReducer
});

export const store = createStore(rootReducer);
