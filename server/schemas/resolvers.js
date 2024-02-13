const User = require('../models/User');
const Quest = require('../models/Quest');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new Error("user not found");
    },
    quests: async () => {
      return await Quest.find();
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error("user not found");
      }
      const isCorrectPassword = await user.isCorrectPassword(args.password);
      console.log(!isCorrectPassword);
      if (!isCorrectPassword) {
        throw new Error("incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    createUser: async (parent, args) => {
      const user = new User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    createQuest: async (parent, args) => {
      const quest = new Quest.create(args);
      return { quest };
    },
    updateUser: async (parent, { id, username, email }) => {
      return await User.findByIdAndUpdate(id, { username, email }, { new: true });
    },
    deleteQuest: async (parent, args, context) => {
      if (context.user) {
        const updatedQuest = await User.findByIdAndUpdate(
          {
            _id: context.quest._id,
          },
          {
            $pull: {
              savedBooks: {
                bookId: args.bookId
              }
            },
          },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error("user not found");
      return await Quest.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
