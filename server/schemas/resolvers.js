const { Message, Guest, Admin } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        allGuests: async () => {
            return await Guest.find().populate('otherGuests')
        },
        getGuest: async (parent, args) => {
            return await Guest.findOne({ name: args.name }).populate('otherGuests')
        }
    },
    Mutation: {
        addGuest: async (parent, { name }) => {
            return Guest.create({ name })
        },
        editGuest: async (parent, { guestID, name }) => {
            return Guest.findOneAndUpdate(
                { _id: guestID },
                { $set: { name: name } }
            )
        },
        addToParty: async (parent, { person1Id, person2Id }) => {
            const member2 = await Guest.findOne({ _id: person2Id })
            const member1 = await Guest.findOne({ _id: person1Id })
            const friend1 = await Guest.findOneAndUpdate(
                { _id: person1Id },
                {
                    $push: {
                        otherGuests: {
                            _id: member2.id,
                            name: member2.name,
                            RSVP: member2.RSVP,
                            otherGuests: member2.otherGuests,
                            mealOpt: member2.mealOpt
                        }
                    }
                },
                { new: true }
            )
            const friend2 = await Guest.findOneAndUpdate(
                { _id: person2Id },
                {
                    $push: {
                        otherGuests: {
                            _id: member1.id,
                            name: member1.name,
                            RSVP: member1.RSVP,
                            otherGuests: member1.otherGuests,
                            mealOpt: member1.mealOpt
                        }
                    }
                },
                { new: true }
            )
            return friend1, friend2
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