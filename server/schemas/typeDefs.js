const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Message{
    _id: ID
    name: String
    note: String
}
type Guest{
    _id:ID
    firstname: String
    lastname:String
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
    getGuest(firstname:String!, lastname:String!): Guest
}

type Mutation{
    addGuest(firstname:String!, lastname:String!,otherGuests:[String], diet:String) :Guest
    editGuest(guestID:ID!,firstname:String!, lastname:String!) : Guest
    addToParty(person1Id:ID!,person2Id:ID!) : Guest
    giveRSVP(guestID:ID!,RSVP:String!,meal:String!) :Guest
    login(username:String!,password:String!):Auth
}
`;

module.exports = typeDefs
