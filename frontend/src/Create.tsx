import { useState } from 'react';
import axios from 'axios';

interface CreateProps {
  onAdd: (task: string) => void;
}

function Create({ onAdd }: CreateProps) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() === '') return;

    axios.post('http://localhost:3001/add', { task: input })
      .then(() => {
        onAdd(input.trim());
        setInput('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex justify-between gap-2 p-4">
      <input
        type="text"
        value={input}
        
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
      >
        Add
      </button>
    </div>
  );
}

export default Create;
