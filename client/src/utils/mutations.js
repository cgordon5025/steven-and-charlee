import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
mutation AddMessage($name: String!, $note: String!) {
    addMessage(name: $name, note: $note) {
      name
      note
    }
  }
`;

export const ADD_TO_PARTY = gql`
mutation AddToParty($person1Id: ID!, $person2Id: ID!) {
  addToParty(person1_id: $person1Id, person2_id: $person2Id) {
    _id
    name
    otherGuests
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
  }
}
`