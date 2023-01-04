import { SAVE_PARTY, SAVE_GUEST } from "./action";

export const reducer = (state, action) => {
    switch (action.type) {
        case SAVE_PARTY: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SAVE_GUEST: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}