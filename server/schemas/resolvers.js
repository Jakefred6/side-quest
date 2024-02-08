const User = require('../models/user');
const Quest = require('../models/quest');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    quests: async () => {
      return await Quest.find();
    },
  },
  Mutation: {
    createUser: async (_, { username, email }) => {
      const user = new User({ username, email });
      await user.save();
      return user;
    },
    createQuest: async (_, { input }) => {
      const quest = new Quest(input);
      await quest.save();
      return quest;
    },
    updateUser: async (_, { id, username, email }) => {
      return await User.findByIdAndUpdate(id, { username, email }, { new: true });
    },
    deleteQuest: async (_, { id }) => {
      return await Quest.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
