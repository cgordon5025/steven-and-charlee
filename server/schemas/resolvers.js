const { Message, Guest, Admin } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // getMessage: async () => {
        //     return await Message.find();
        // },
        allGuests: async () => {
            return await Guest.find().populate('otherGuests')
        },
        getGuest: async (parent, args) => {
            return await Guest.findOne({ name: args.name })
        }
    },
    Mutation: {
        addMessage: async (parent, { name, note }) => {
            return Message.create({ name, note });
        },
        addGuest: async (parent, { name, otherGuests, diet }) => {
            return Guest.create({ name, otherGuests, diet })
        },
        addToParty: async (parent, { person1_id, person2_id }) => {
            const newMember = await Guest.findOne({ _id: person2_id })
            console.log(newMember)
            const member = await Guest.findOneAndUpdate(
                { _id: person1_id },
                {
                    $set: {
                        otherGuests: {
                            _id: newMember.id,
                            name: newMember.name,
                            RSVP: newMember.RSVP,
                            otherGuests: newMember.otherGuests,
                            mealOpt: newMember.mealOpt
                        }
                    }
                },
                { new: true }
            )
            return member
        },
        giveRSVP: async (parent, { guestID, RSVP, meal }) => {
            return Guest.findOneAndUpdate(
                { _id: guestID },
                { $set: { RSVP: RSVP, mealOpt: meal } },
                { new: true }
            )
        },
        login: async (parent, { username, password }) => {
            const admin = await Admin.findOne({ username })
            if (!admin) {
                throw new AuthenticationError("You are not one of the admins for this site, please return to the homepage")
            }

            const correctPw = await admin.isCorrectPassword(password)
            if (!correctPw) {
                throw new AuthenticationError("You entered the wrong password")
            };

            const token = signToken(admin)
            return { token, admin }
        }
    }
};

module.exports = resolvers