import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Level() {
  const { id } = useParams();
  const [level, setLevel] = useState(null);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('71'); // C++ (example)
  const [output, setOutput] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/levels')
      .then(res => {
        const lvl = res.data.find(l => l.level_number === parseInt(id));
        setLevel(lvl);
      });
  }, [id]);

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:4000/api/submissions', {
      user_id: 1,
      level_number: parseInt(id),
      code,
      language_id: language
    });
    setOutput('Submitted! Judge0 token: ' + res.data.token);
  };

  if (!level) return <div className='p-6'>Loading...</div>;

  return (
    <div className='p-6'>
      <h2 className='text-xl text-cyan-400 mb-2'>{level.title}</h2>
      <p className='text-gray-400 mb-4'>{level.description}</p>
      <textarea
        className='w-full h-64 bg-gray-800 border border-gray-700 rounded-md p-2 text-sm text-white'
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder='Write your solution here...'
      />
      <div className='mt-4'>
        <button
          onClick={handleSubmit}
          className='px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-black font-semibold'>
          Submit
        </button>
      </div>
      {output && <pre className='mt-4 p-2 bg-gray-900 rounded-md'>{output}</pre>}
    </div>
  );
}