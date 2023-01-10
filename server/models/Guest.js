const { Schema, model } = require('mongoose');

const GuestSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        RSVP: {
            type: String,
            default: "Unconfirmed",
            required: true
        },
        otherGuests: [
            { type: String }
        ],
        diet: {
            type: String
        }
    }
)

const Guest = model('Guest', GuestSchema);

module.exports = Guest