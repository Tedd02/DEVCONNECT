import React, { useState } from 'react';
import Modal from 'react-modal';

type TaskModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddTask: (task: { title: string; description: string; dueDate: string; completed: boolean }) => void; // Updated type
};

export function TaskModal({ isOpen, onRequestClose, onAddTask }: TaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask({ title, description, dueDate, completed: false }); // Add completed here
    setTitle('');
    setDescription('');
    setDueDate(new Date().toISOString().split("T")[0]);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="flex justify-center-safe items-center-safe w-full h-full border-2 bg-black/20">
      <div className='flex flex-col w-[30%] border border-gray-100 rounded-2xl px-5 py-5 bg-white outline-2 outline-offset-2 outline-gray-200/50'>
      <div className='flex justify-between mb-2'>
        <h2 className='text-xl font-bold text-left'>Create Task</h2>
        <button onClick={onRequestClose} className='text-lg text-cyan-700 cursor-pointer px-3'>x</button>
      </div>
      <p className='text-gray-500 text-base mb-3'>Create a new task using this dialog, click on add task when done</p>
      <form onSubmit={handleSubmit} className='flex flex-col'>

        <div className='flex flex-col'>
        <label className="text-base pb-2 font-medium">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required // Added required attribute
          className='px-3 py-2 mb-5 border-gray-300 border rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-violet-500/50'
        />
        </div>

        <div className='flex flex-col'>
        <label className="text-base pb-2 font-medium">Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required // Added required attribute
          className='px-3 py-2 mb-5 rounded-lg border-gray-300 border focus:outline-2 focus:outline-offset-2 focus:outline-violet-500/50'
        />
        </div>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required // Added required attribute
          className='px-3 py-2 mb-5 border-gray-300 border focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 cursor-pointer'
        />
        <button type="submit"  className='px-3 py-2 mb-5 bg-indigo-600 text-white text-base font-medium border rounded-lg'>Add task</button>
      </form>
        </div>
    </Modal>
  );
}