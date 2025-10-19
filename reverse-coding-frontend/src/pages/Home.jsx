import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/levels')
      .then(res => setLevels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='p-6'>
      <h2 className='text-2xl mb-4 text-cyan-400 font-semibold'>Choose Your Level</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {levels.map(level => (
          <Link key={level.id} to={`/level/${level.level_number}`}>
            <div className='p-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-400 transition'>
              <h3 className='text-lg font-bold'>{level.title}</h3>
              <p className='text-sm text-gray-400'>Difficulty: {level.difficulty}</p>
              <p className='text-sm text-gray-500'>Points: {level.points}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}