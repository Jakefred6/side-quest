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
  mutation createQuest($title: String!, $continent: Int!, $xp: Int!) {
    createQuest(title: $title, continent: $continent, xp: $xp) {
      _id
      title
      continent
      xp
      
    }
  }
`;
