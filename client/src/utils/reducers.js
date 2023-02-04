import { SAVE_PARTY, SAVE_GUEST, RSVP_PARTY } from "./action";

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
        case RSVP_PARTY: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}