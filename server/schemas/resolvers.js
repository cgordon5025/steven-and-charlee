const { Message, Guest } = require('../models');
const resolvers = {
    Query: {
        // getMessage: async () => {
        //     return await Message.find();
        // },
        allGuests: async () => {
            return await Guest.find()
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
        }
    }
};

module.exports = resolvers