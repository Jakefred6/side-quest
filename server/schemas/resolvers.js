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
      return await Quest.find({});
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("user not found");
      }
      const isCorrectPassword = await user.isCorrectPassword(password);
      console.log(!isCorrectPassword);
      if (!isCorrectPassword) {
        throw new Error("incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    createUser: async (parent, { username, email, password }) => {
      const user = new User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    createQuest: async (parent, { title, continent, xp }) => {
      const quest = new Quest.create({ title, continent, xp });
      return quest;
    },
    // deleteQuest: async (parent, { _id }, context) => {
    //   const updatedQuest = await User.findByIdAndUpdate(
    //     {
    //       _id: context.quest._id,
    //     },
    //     {
    //       $pull: {
    //         savedBooks: {
    //           bookId: args.bookId
    //         }
    //       },
    //     },
    //     { new: true }
    //   );
    //   if (!updatedQuest) {
    //     throw new Error("Quest not found");
    //   }
    //   return await Quest.findByIdAndDelete(id);
    //   return updatedUser; 
    // },
  },
};

module.exports = resolvers;
