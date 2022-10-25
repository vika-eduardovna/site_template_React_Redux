import { data } from "../../components/AboutUs/data";

const defaultState = data;
const SHOW_INFO_ABOUT = 'SHOW_INFO_ABOUT';

export const aboutUsReducer = (state = defaultState, action) => {
    if (action.type === 'SHOW_INFO_ABOUT') {
        return [...state, null]
    } else {
        return defaultState
    }
}