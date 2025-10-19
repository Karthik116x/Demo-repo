import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/leaderboard')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='p-6'>
      <h2 className='text-2xl mb-4 text-cyan-400 font-semibold'>Leaderboard</h2>
      <table className='w-full border border-gray-700 text-left'>
        <thead className='bg-gray-800'>
          <tr>
            <th className='p-2 border-b border-gray-700'>Rank</th>
            <th className='p-2 border-b border-gray-700'>Username</th>
            <th className='p-2 border-b border-gray-700'>Level</th>
            <th className='p-2 border-b border-gray-700'>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className='hover:bg-gray-900'>
              <td className='p-2 border-b border-gray-700'>{index + 1}</td>
              <td className='p-2 border-b border-gray-700'>{row.username || 'Anonymous'}</td>
              <td className='p-2 border-b border-gray-700'>{row.level_reached || '-'}</td>
              <td className='p-2 border-b border-gray-700'>{row.total_points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}