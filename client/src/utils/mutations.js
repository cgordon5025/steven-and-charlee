import { gql } from '@apollo/client';

export const ADD_TO_PARTY = gql`
mutation AddToParty($person1Id: ID!, $person2Id: ID!) {
  addToParty(person1Id: $person1Id, person2Id: $person2Id) {
    firstname
    lastname
    otherGuests {
      firstname
      lastname
      mealOpt
      allergyDiet
      _id
      RSVP
    }
  }
}
`;

export const GIVE_RSVP = gql`
mutation GiveRSVP($guestId: ID!, $rsvp: String!, $meal: String!) {
  giveRSVP(guestID: $guestId, RSVP: $rsvp, meal: $meal) {
    RSVP
    _id
    mealOpt
    firstname
    lastname
    allergyDiet
  }
}
`

export const EDIT_GUEST = gql`
mutation EditGuest($guestId: ID!, $firstname: String!, $lastname:String!) {
  editGuest(guestID: $guestId, firstname: $firstname, lastname:$lastname) {
    firstname
    lastname
  }
}
`;

export const ADD_GUEST = gql`
mutation addGuest($firstname: String!, $lastname:String!) {
  addGuest(firstname: $firstname, lastname:$lastname) {
    firstname
    lastname
    _id
    RSVP
    allergyDiet
    mealOpt
  }
}
`;

export const LOGIN = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    admin {
      username
    }
  }
}
`;