const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Quest {
    _id: ID!
    title: String!
    description: String!
    continent: String!
    country_city: String!
    xp: Int!
  }

  input QuestInput {
    title: String!
    description: String!
    continent: String!
    country_city: String!
    xp: Int!
  }

  type Query {
    users: [User!]!
    quests: [Quest!]!
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
    createQuest(input: QuestInput!): Quest!
    updateUser(id: ID!, username: String, email: String): User!
    deleteQuest(id: ID!): Quest!
  }
`;

module.exports = typeDefs;