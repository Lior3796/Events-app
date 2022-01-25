import { ADD_ONE } from "../actions/types";

const favoriteReducer = async (page = 1, action) => {
    switch (action.type) {
        case ADD_ONE:
            return ++page

        default:
            return 1;
    }
};

export default favoriteReducer;