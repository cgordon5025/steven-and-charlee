const { Schema, model } = require('mongoose');

const GuestSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        RSVP: {
            type: String,
        },
        otherGuests: [{
            type: Schema.Types.String,
            ref: "Guest"
        }
        ],
        mealOpt: {
            type: String
        },
        allergyDiet: {
            type: String
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