import { gql } from "@apollo/client";

export const ALL_GUESTS = gql`
query AllGuests {
  allGuests  {
    RSVP
    _id
    firstname
    lastname
    allergyDiet
    mealOpt
    otherGuests {
      _id
      mealOpt
      RSVP
      allergyDiet
      firstname
      lastname
    }
 
  }
}
`;

export const GET_GUEST = gql`
query GetGuest($firstname: String!, $lastname:String!) {
  getGuest(firstname: $firstname, lastname: $lastname) {
    RSVP
    _id
    mealOpt
    allergyDiet
    firstname
    lastname
    otherGuests {
      firstname
    lastname
      RSVP
      _id
      allergyDiet
      mealOpt
    }
  }
}
`;