import { reviewsData } from '../../components/data'

const defaultState = reviewsData;
const ADD_REVIEW = 'ADD_REVIEW';
export const addFeedback = payload => ({ type: ADD_REVIEW, payload });

export const reviewsReducer = (state = defaultState, action) => {
    if (action.type === 'ADD_REVIEW') {
        return [...state, {
            ...action.payload,
            id: Date.now()
        }]
    } else {
        return state
    }
}