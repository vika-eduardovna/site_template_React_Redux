import { data } from "../../components/Services/data";

const defaultState = data;
const ADD_SERVICE = 'ADD_SERVICE';
export const addNewServiceItem = payload => ({type: ADD_SERVICE, payload});

export const servicesReducer = (state = defaultState, action) => {
    if (action.type === 'ADD_SERVICE') {
        return [...state, {
            ...action.payload,
            id: Date.now()
        }]
    } else {
        return state
    }
}