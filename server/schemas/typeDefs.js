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
    otherGuests:[Guest]
    mealOpt:String
    allergyDiet:String
}
type Admin {
    _id:ID
    username:String
    password:String
}

type Auth {
    token:ID!
    admin:Admin
}

type Query{
    allGuests:[Guest]
    getGuest(name:String!): Guest
}

type Mutation{
    addGuest(name:String!,otherGuests:[String], diet:String) :Guest
    editGuest(guestID:ID!,name:String!) : Guest
    addToParty(person1Id:ID!,person2Id:ID!) : Guest
    giveRSVP(guestID:ID!,RSVP:String!,meal:String!) :Guest
    login(username:String!,password:String!):Auth
}
`;

module.exports = typeDefs
