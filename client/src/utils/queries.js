import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_QUEST = gql`
  query getQuests {
    quests {
      _id
      title
      # description
      continent
      # country_city
      # xp
      # location
      username {
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_QUEST = gql`
  query getSingleQuest($_id: ID!) {
    quest(_id: $_id) {
      _id
      title
      # description
      continent
      # country_city
      # xp
      # location
      username {
        _id
      }
    }
  }
`;