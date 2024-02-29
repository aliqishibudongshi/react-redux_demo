import {ADD_PERSON} from "../constant"

const initialState = [{id: "001", name: "Roman", age: 18}]
export default function personReducer(previousState = initialState, action){
    const {type, data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...previousState];
        default:
            return previousState;
    }
}