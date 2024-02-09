import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const SingleQuest = () => {
  const { questId } = useParams();
  const [quest, setQuest] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchQuest = async () => {
      try {
        // Make an HTTP GET request to fetch quest data from the backend
        const response = await fetch(`/api/quests/${questId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch quest data');
        }
        const data = await response.json();
        setQuest(data); // Update the quest state with the retrieved data
      } catch (error) {
        console.error('Error fetching quest data:', error);
      }
    };

    fetchQuest();

    return () => {
      // Cleanup function (if needed)
    };
  }, [questId]);

  const handleAddQuest = () => {
    // Redirect to the page where you can add a new quest
    history.push('/add-quest');
  };

  if (!quest) {
    return <div>Loading...</div>; // Render loading message
  }

  return (
    <div>
      <h2>{quest.title}</h2> {/* Render quest title */}
      <p>{quest.description}</p> {/* Render quest description */}
      <p>Continent: {quest.continent}</p> {/* Render continent */}
      <p>Country/City: {quest.country_city}</p> {/* Render country/city */}
      <p>XP: {quest.xp}</p> {/* Render XP */}
      <p>Location: {quest.location}</p> {/* Render location */}
      <button onClick={handleAddQuest}>Add Quest</button> {/* Add Quest button */}
    </div>
  );
};

export default SingleQuest;

