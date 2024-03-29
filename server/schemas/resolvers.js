const User = require('../models/User');
const Quest = require('../models/Quest');
const { signToken } = require('../models/signToken');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    
    // users: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   throw new Error("user not found");
    // },
    quests: async () => {
      return await Quest.find({});
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      const isCorrectPassword = await user.isCorrectPassword(password);
      if (!isCorrectPassword) {
        throw new Error("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user: { _id: user._id, username: user.username, email: user.email } };
    },
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // createUser: async (parent, { input: { username, email, password } }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return { token, user };
    // },
    async createQuest(_, { title, continent, xp }) {
      // Here you handle the database operation
      const newQuest = new Quest({
        title,
        continent,
        xp,
      });

      try {
        const result = await newQuest.save();
        return result;
      } catch (error) {
        throw new Error(error);
      }
    }
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
