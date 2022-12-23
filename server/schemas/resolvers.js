const { Message } = require('../models');
const resolvers = {
    Query: {
        getMessage: async () => {
            return await Message.find();
        },
    },
    Mutation: {
        addMessage: async (parent, { name, note }) => {
            return Message.create({ name, note });
        }
    }
};

module.exports = resolvers