import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
query getMessage {
    getMessage {
      _id
      name
      note
    }
  }
`;

export const ALL_GUESTS = gql`
query AllGuests {
  allGuests {
    RSVP
    _id
    name
    mealOpt
    otherGuests {
      name
      _id
      mealOpt
      RSVP
    }
  }
}
`;

export const GET_GUEST = gql`
query GetGuest($name: String!) {
  getGuest(name: $name) {
    RSVP
    _id
    mealOpt
    allergyDiet
    name
    otherGuests {
      name
      RSVP
      _id
      allergyDiet
      mealOpt
    }
  }
}
`;