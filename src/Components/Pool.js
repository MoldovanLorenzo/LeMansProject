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
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    axios.get('https://api64.ipify.org?format=json')
      .then(response => {
        setUserIP(response.data.ip);
      })
      .catch(error => {
        console.error('Error getting IP address:', error);
      });
  }, []);
  const nrVoturi = async () => {
    try {
      const response = await axios.get('http://localhost:5000/score_calculator'); 
      const votesData = response.data;
  
      const newOptions = Object.entries(votesData).map(([text, votes], id) => ({
        id: id + 1,
        text,
        votes,
      }));
  
      setOptions(newOptions);
    } catch (error) {
      console.error('Error getting votes:', error);
    }
  };

  useEffect(() => {
    nrVoturi(); 
  }, []);

  const handleVote = async (choice) => {
    try {
      await axios.post('http://localhost:5000/add_scores', { 'update_field':choice,'user_ip':userIP}); 
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
            <button className='Butone' onClick={() => handleVote(option.text)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;
