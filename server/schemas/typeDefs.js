const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Message{
    _id: ID
    name: String
    note: String
}
type Guest{
    _id:ID
    name: String
    RSVP: String
    otherGuests:[String]
    diet:String

}

type Query{
    getMessage:[Message]
    allGuests:[Guest]
    getGuest(name:String!): Guest
}

type Mutation{
    addMessage(name:String!, note:String!) : Message
    addGuest(name:String!,otherGuests:[String], diet:String) :Guest
}
`;

module.exports = typeDefs
