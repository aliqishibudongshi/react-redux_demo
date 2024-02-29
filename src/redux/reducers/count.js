import {INCREMENT, DECREMENT} from "../constant"

const initialState = 0;
export default function countReducer(previousState = initialState, action) {
    const {type, data} = action;
    switch (type) {
        case INCREMENT:
            return previousState + data
        case DECREMENT:
            return previousState - data
        default:
            return previousState
    }
}