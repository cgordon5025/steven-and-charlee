const { Message, Guest, Admin } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        allGuests: async () => {
            return await Guest.find().populate('otherGuests')
        },
        getGuest: async (parent, { firstname, lastname }) => {
            return await Guest.findOne({ firstname: firstname, lastname: lastname }).populate('otherGuests')
        }
    },
    Mutation: {
        addGuest: async (parent, { firstname, lastname }) => {
            return Guest.create({ firstname, lastname })
        },
        editGuest: async (parent, { guestID, firstname, lastname }) => {
            return Guest.findOneAndUpdate(
                { _id: guestID },
                { $set: { firstname: firstname, lastname: lastname } }
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
                            firstname: member2.firstname,
                            lastname: member2.lastname,
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
                            firstname: member1.firstname,
                            lastname: member1.lastname,
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
        giveRSVP: async (parent, { guestId, rsvp, mealOpt, allergyDiet }) => {
            return Guest.findOneAndUpdate(
                { _id: guestId },
                { $set: { RSVP: rsvp, mealOpt: mealOpt, allergyDiet: allergyDiet } },
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