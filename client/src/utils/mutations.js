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
  mutation createQuest($title: String!, $description: String!, $location: String!, $xp: Int!) {
    createQuest(title: $title, description: $description, location: $location, xp: $xp) {
      _id
      title
      # description
      continent
      # country_city
      xp
      # location
      username {
        _id
      }
    }
  }
`;
