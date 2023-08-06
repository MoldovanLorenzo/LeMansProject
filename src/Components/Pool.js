import React, { useState, useEffect } from 'react';
import '../Styles/Pool.css';
import axios from 'axios'; 

const Poll = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'Cadiliac ', votes: 0 },
    { id: 2, text: 'Porsche ', votes: 0 },
    { id: 3, text: 'Toyota ', votes: 0 },
    { id: 4, text: 'Ferrari ', votes: 0 },
  ]);

  const nrVoturi = async () => {
    try {
      const response = await axios.get('.http://localhost:5000/votes'); 
      const votesData = response.data;

      setOptions((prevOptions) =>
        prevOptions.map((option) => {
          const votes = votesData.find((vote) => vote.id === option.id);
          return { ...option, votes: votes ? votes.votes : 0 };
        })
      );
    } catch (error) {
      console.error('Error getting votes:', error);
    }
  };

  useEffect(() => {
    nrVoturi(); 
  }, []);

  const handleVote = async (id) => {
    try {
      await axios.post('.http://localhost:5000/vote', { id }); 
      nrVoturi(); 
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className='PanouVot'>
      <h2 className='Titlu'>Vote on Your Favorite Team:</h2>
      <ul className='ListaOptiuni'>
        {options.map((option) => (
          <li key={option.id}>
            {option.text} - votes: {option.votes}
            <button className='Butone' onClick={() => handleVote(option.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;
