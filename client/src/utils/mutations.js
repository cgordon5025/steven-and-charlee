import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
mutation AddMessage($name: String!, $note: String!) {
    addMessage(name: $name, note: $note) {
      name
      note
    }
  }
`;
