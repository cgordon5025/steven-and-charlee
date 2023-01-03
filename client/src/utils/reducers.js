import { SAVE_PARTY } from "./action";

export const reducer = (state, action) => {
    switch (action.type) {
        case SAVE_PARTY: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}