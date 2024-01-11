import { USER_ACTION_TYPES } from "./user.types";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import { SetCurrentUser, setCurrentUser } from "./user.action";

export type UserState = {
    readonly currentUser: UserData | null;
}

export const INITIAL_STATE : UserState = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if(setCurrentUser.match(action)){
        return{
            ...state,
            currentUser: action.payload
        };
    }

    return state;//return previous state if none of the cases match. 
}
