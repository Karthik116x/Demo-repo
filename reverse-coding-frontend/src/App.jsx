import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Level from './pages/Level.jsx';
import Leaderboard from './pages/Leaderboard.jsx';

export default function App() {
  return (
    <div className='min-h-screen bg-black text-white font-mono'>
      <nav className='flex justify-between items-center p-4 border-b border-gray-700'>
        <h1 className='text-xl font-bold text-cyan-400'>Reverse Coding Challenge</h1>
        <div className='space-x-4'>
          <Link to='/' className='hover:text-cyan-400'>Home</Link>
          <Link to='/leaderboard' className='hover:text-cyan-400'>Leaderboard</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/level/:id' element={<Level />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  );
}