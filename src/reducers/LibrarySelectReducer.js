import { ITEMSELECT } from "../actions/listActions";

export default LibrarySelectReducer = (state = null, action) => {
    switch (action.type) {
        case ITEMSELECT:
            return action.payload;
        default:
            return state;
    }
}