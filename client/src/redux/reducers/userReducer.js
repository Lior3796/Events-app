import { GET_FAVORITE, ADD_FAVORITE, DELETE_FAVORITE, LOGIN } from "../actions/types";
import { getUserEvents, addUserFavoriteEvent, deleteUserFavoriteEvent } from "../../components/service/service";
import { ifUserRegistered } from "../../components/utills/Index";
const favoriteReducer = async (user = {}, action) => {
    switch (action.type) {
        case LOGIN:
            // Get userName from cookies;
            if (!ifUserRegistered()) return user;
            user.userName = ifUserRegistered();
            return user;

        case ADD_FAVORITE:
            // Add key to DB;
            try {
                const response = await addUserFavoriteEvent(action.payload);
                user.message = response.message;
            }
            catch (err) {
                user.message = err.message;
            }
            return user;
        case DELETE_FAVORITE:
            try {
                const response = await deleteUserFavoriteEvent(action.payload);
                user.message = response.message;
            }
            catch (err) {
                user.message = err.message;
            }
            return user;

        case GET_FAVORITE:
            const { userName } = action.payload;
            const message = { success: "success request", error: "bad request" };
            try {
                const favoriteEvents = await getUserEvents(userName);
                console.log(favoriteEvents);
                return { message: message.success, result: favoriteEvents }

            } catch (error) {
                return { message: message.success, result: error }
            }

        default:
            return "";
    }
};

export default favoriteReducer;