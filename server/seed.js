const mongoose = require('mongoose');
const Quest = require('./models/Quest');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample quests data
const sampleQuests = [
    {
        title: "Explore the Amazon Rainforest",
        description: "Embark on an adventure through the lush Amazon Rainforest.",
        continent: "SA",
        country_city: "Amazon Rainforest",
        xp: 200,
        location: "Amazon Rainforest"
      },
      {
        title: "Climb Mount Kilimanjaro",
        description: "Conquer Africa's tallest peak, Mount Kilimanjaro.",
        continent: "AF",
        country_city: "Tanzania",
        xp: 300,
        location: "Mount Kilimanjaro"
      },
      {
        title: "Visit the Great Wall of China",
        description: "Walk along one of the most iconic landmarks in the world, the Great Wall of China.",
        continent: "AS",
        country_city: "China",
        xp: 250,
        location: "Great Wall of China"
      },
      {
        title: "Explore the Pyramids of Giza",
        description: "Uncover the mysteries of ancient Egypt at the Pyramids of Giza.",
        continent: "AF",
        country_city: "Egypt",
        xp: 280,
        location: "Pyramids of Giza"
      },
      {
        title: "Hike the Inca Trail to Machu Picchu",
        description: "Embark on a breathtaking trek through the Andes Mountains to reach the ancient Inca city of Machu Picchu.",
        continent: "SA",
        country_city: "Peru",
        xp: 320,
        location: "Machu Picchu"
      },
      {
        title: "Safari in Serengeti National Park",
        description: "Witness the stunning wildlife of Africa on a safari adventure in Serengeti National Park.",
        continent: "AF",
        country_city: "Tanzania",
        xp: 300,
        location: "Serengeti National Park"
      },
      {
        title: "Explore the Louvre Museum",
        description: "Discover world-famous artworks and historical artifacts at the Louvre Museum in Paris.",
        continent: "EU",
        country_city: "France",
        xp: 270,
        location: "Louvre Museum"
      },
      {
        title: "Dive the Great Barrier Reef",
        description: "Plunge into the colorful underwater world of the Great Barrier Reef in Australia.",
        continent: "OC",
        country_city: "Australia",
        xp: 350,
        location: "Great Barrier Reef"
      },
      {
        title: "Trek to Everest Base Camp",
        description: "Embark on an epic journey to the base camp of the world's highest mountain, Mount Everest.",
        continent: "AS",
        country_city: "Nepal",
        xp: 400,
        location: "Everest Base Camp"
      },
      {
        title: "Discover the Colosseum",
        description: "Step back in time and explore the ancient Roman Colosseum in Italy.",
        continent: "EU",
        country_city: "Italy",
        xp: 280,
        location: "Colosseum"
      },
      {
        title: "Sail the Greek Islands",
        description: "Set sail on a mesmerizing journey through the beautiful Greek Islands in the Aegean Sea.",
        continent: "EU",
        country_city: "Greece",
        xp: 320,
        location: "Greek Islands"
      },
      {
        title: "Raft the Grand Canyon",
        description: "Experience the thrill of white-water rafting through the majestic Grand Canyon in Arizona, USA.",
        continent: "NA",
        country_city: "USA",
        xp: 380,
        location: "Grand Canyon"
      },
      {
        title: "Trek to the Lost City of Petra",
        description: "Embark on an adventure to the ancient Nabatean city of Petra, carved into the rose-red cliffs of Jordan.",
        continent: "AS",
        country_city: "Jordan",
        xp: 350,
        location: "Petra"
      },
      {
        title: "Explore the Amazon River",
        description: "Embark on a boat expedition down the mighty Amazon River, home to an incredible array of wildlife.",
        continent: "SA",
        country_city: "Brazil",
        xp: 300,
        location: "Amazon River"
      },
      {
        title: "Ski in the Swiss Alps",
        description: "Hit the slopes and experience world-class skiing in the breathtaking Swiss Alps.",
        continent: "EU",
        country_city: "Switzerland",
        xp: 270,
        location: "Swiss Alps"
      },
      {
        title: "Visit the Taj Mahal",
        description: "Marvel at the stunning architecture of the Taj Mahal, one of the Seven Wonders of the World, in India.",
        continent: "AS",
        country_city: "India",
        xp: 320,
        location: "Taj Mahal"
      },
      {
        title: "Explore the Serengeti Plains",
        description: "Embark on a safari adventure across the vast Serengeti Plains, home to Africa's iconic wildlife.",
        continent: "AF",
        country_city: "Tanzania",
        xp: 300,
        location: "Serengeti Plains"
      },
      {
        title: "Trek the Camino de Santiago",
        description: "Embark on a spiritual journey along the historic Camino de Santiago pilgrimage route in Spain.",
        continent: "EU",
        country_city: "Spain",
        xp: 350,
        location: "Camino de Santiago"
      },
      {
        title: "Explore the Great Smoky Mountains",
        description: "Hike through the stunning landscapes of the Great Smoky Mountains National Park in the USA.",
        continent: "NA",
        country_city: "USA",
        xp: 280,
        location: "Great Smoky Mountains"
      },
      {
        title: "Dive with Whale Sharks in the Maldives",
        description: "Swim alongside majestic whale sharks in the crystal-clear waters of the Maldives.",
        continent: "AS",
        country_city: "Maldives",
        xp: 400,
        location: "Maldives"
      },
      {
        title: "Explore the Vatican City",
        description: "Discover the rich history and stunning architecture of the Vatican City in the heart of Rome.",
        continent: "EU",
        country_city: "Vatican City",
        xp: 300,
        location: "Vatican City"
      }
  // Add more quests as needed
];

// Function to seed quests
const seedQuests = async () => {
  try {
    // Delete existing quests
    await Quest.deleteMany();
    // Insert sample quests
    await Quest.insertMany(sampleQuests);
    console.log('Sample quests seeded successfully!');
  } catch (error) {
    console.error('Error seeding quests:', error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
};

// Call the function to seed quests
seedQuests();
