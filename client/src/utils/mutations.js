import { gql } from '@apollo/client';

export const ADD_TO_PARTY = gql`
mutation AddToParty($person1Id: ID!, $person2Id: ID!) {
  addToParty(person1Id: $person1Id, person2Id: $person2Id) {
    name
    otherGuests {
      name
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
    name
    allergyDiet
  }
}
`

export const EDIT_GUEST = gql`
mutation EditGuest($guestId: ID!, $name: String!) {
  editGuest(guestID: $guestId, name: $name) {
    name
  }
}
`;

export const ADD_GUEST = gql`
mutation addGuest($name: String!) {
  addGuest(name: $name) {
    name
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