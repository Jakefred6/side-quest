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
        title: "Retrieve the Lost Artifact",
        continent: 1,
        xp: 100,
        username: "Hero1"
    },
    {
        title: "Uncover the Mystery of the Forbidden Forest",
        continent: 2,
        xp: 120,
        username: "Adventurer42"
    },
    {
        title: "Study the Arcane Runes",
        continent: 3,
        xp: 150,
        username: "MageMaster"
    },
    {
        title: "Steal the Crown Jewels",
        continent: 4,
        xp: 200,
        username: "StealthyRogue"
    },
    {
        title: "Plunder the Floating Sky Islands",
        continent: 5,
        xp: 180,
        username: "SkyPirate99"
    },
    {
        title: "Chart the Unexplored Seas",
        continent: 6,
        xp: 160,
        username: "Explorer007"
    },
    {
        title: "Conquer the Labyrinth of Shadows",
        continent: 7,
        xp: 190,
        username: "DungeonDelver"
    },
    // Add more quests here...
    {
        title: "Retrieve the Excalibur Sword",
        continent: 1,
        xp: 220,
        username: "LegendaryKnight"
    },
    {
        title: "Discover the Lost City of Atlantis",
        continent: 2,
        xp: 240,
        username: "AtlantisExplorer"
    },
    {
        title: "Defeat the Ancient Wyrm",
        continent: 3,
        xp: 280,
        username: "DragonSlayer"
    },
    {
        title: "Search for the Fountain of Youth",
        continent: 4,
        xp: 210,
        username: "EternalSeeker"
    },
    {
        title: "Explore the Northern Lights",
        continent: 5,
        xp: 230,
        username: "AuroraHunter"
    },
    {
        title: "Journey through the Underworld",
        continent: 6,
        xp: 260,
        username: "UnderworldExplorer"
    },
    {
        title: "Conquer the Tower of Doom",
        continent: 7,
        xp: 270,
        username: "TowerClimber"
    },
    {
        title: "Discover the Hidden Temple",
        continent: 1,
        xp: 200,
        username: "TempleExplorer"
    },
    {
        title: "Navigate the Enchanted Forest",
        continent: 2,
        xp: 190,
        username: "ForestNavigator"
    },
    {
        title: "Solve the Riddles of the Sphinx",
        continent: 3,
        xp: 180,
        username: "SphinxSolver"
    },
    {
        title: "Ride the Rapids of the Amazon River",
        continent: 4,
        xp: 170,
        username: "RiverRider"
    },
    {
        title: "Seek the Lost Treasure of El Dorado",
        continent: 5,
        xp: 160,
        username: "TreasureHunter"
    },
    {
        title: "Climb the Peaks of the Himalayas",
        continent: 6,
        xp: 150,
        username: "MountainClimber"
    },
    {
        title: "Embark on the Silk Road Adventure",
        continent: 7,
        xp: 140,
        username: "SilkRoadTraveler2"
    },
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
