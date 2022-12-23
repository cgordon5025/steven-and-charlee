const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Message{
    _id: ID
    name: String
    note: String
}

type Query{
    getMessage:[Message]
}

type Mutation{
    addMessage(name:String!, note:String!) : Message
}
`;

module.exports = typeDefs
