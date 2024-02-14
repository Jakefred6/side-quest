const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Quest {
    _id: ID!
    title: String!
    # description: String! // Commented out to match Quest.js
    continent: Int!          # Adjusted to match Quest.js
    # country_city: String! // Commented out to match Quest.js
    # xp: Int!
    # location: String! // Commented out to match Quest.js
    username: String!
  }

  input QuestInput {
    title: String!
    # description: String! // Commented out to match Quest.js
    continent: Int!          # Adjusted to match Quest.js
    # country_city: String! // Commented out to match Quest.js
    # xp: Int!
    # location: String! // Commented out to match Quest.js
  }

  type Query {
    users: [User!]!
    quests: [Quest!]!
    quest(_id: ID!): Quest
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
    createQuest(input: QuestInput!): Quest!
    updateUser(id: ID!, username: String, email: String): User!
    deleteQuest(id: ID!): Quest!
    login(email: String!, password: String!): AuthPayload! # Define login mutation
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

module.exports = typeDefs;
