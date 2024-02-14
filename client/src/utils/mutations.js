import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const CREATE_QUEST = gql`
  mutation createQuest($title: String!, $xp: Int!, $continent: Int!) {
    createQuest(title: $title, xp: $xp, continent: $continent) {
      _id
      title
      xp
      continent
    }
  }
`;
