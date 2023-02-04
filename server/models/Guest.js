const { Schema, model } = require('mongoose');

const GuestSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        RSVP: {
            type: String,
            default: ""
        },
        otherGuests: [{
            type: Schema.Types.String,
            ref: "Guest"
        }
        ],
        mealOpt: {
            type: String,
            default: ""
        },
        allergyDiet: {
            type: String,
            default: ""

        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

GuestSchema.virtual('partyTotal').get(function () {
    return this.otherGuests.length + 1
})
const Guest = model('Guest', GuestSchema);

module.exports = Guest

// is this necessary?