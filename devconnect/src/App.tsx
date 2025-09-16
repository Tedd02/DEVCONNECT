//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import { Button } from "@/components/ui/button";
import "./App.css";

import { useState } from "react";
import { Task } from "./components/task";
import { TaskForm } from "./components/taskForm"

type TaskType = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Setup GitHub", completed: true },
    { id: 3, title: "Get Started", completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (title: string) => {
  setTasks([...tasks, { id: Date.now(), title, completed: false }])
}

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Task Tracker 🚀</h1>
        <TaskForm onAdd={addTask} />
        <div className="w-full max-w-md">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
