import { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from './utils/auth';

interface Task {
  _id?: string;
  task: string;
  completed?: boolean;
}

function Home() {
  const navigate = useNavigate();
  const [list, setList] = useState<Task[]>([]);

  // Check authentication on component mount
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }

    // Your existing API call
    axios.get('http://localhost:3001/todos')
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  }, [navigate]);

  const addTask = (task: string) => {
    setList(prev => [...prev, { task }]);
  };

  const deleteTask = (index: number) => {
    setList(prev => prev.filter((_, i) => i !== index));
  };

  const toggleComplete = (index: number) => {
    setList(prev =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Don't render if not authenticated
  if (!isAuthenticated()) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br z-10 flex flex-col">
      {/* Simple logout header */}
      <div className="p-4 flex justify-end">
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
        >
          Logout
        </button>
      </div>

      {/* Your existing content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-amber-100 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4 text-amber-700">Listify </h2>
          <Create onAdd={addTask} />
          <div className="mt-4">
            {list.length === 0 ? (
              <div className="text-center text-gray-500">Add some tasks</div>
            ) : (
              list.map((task, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center bg-amber-50 border border-amber-200 p-2 rounded mb-2 shadow-sm ${
                    task.completed ? 'line-through text-gray-500 opacity-60' : ''
                  }`}
                >
                  <span className="flex-1">{task.task}</span>
                  <button
                    onClick={() => toggleComplete(index)}
                    className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded ml-2"
                  >
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;