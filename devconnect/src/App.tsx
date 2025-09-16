//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import { Button } from "@/components/ui/button";
import "./App.css";

import { useState } from "react";
import { Task } from "./components/task";
import { TaskForm } from "./components/taskForm";
import { Layout } from "./components/layout";
import { DarkModeToggle } from "./components/DarkModeToggle";

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
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-between w-full mb-4">
          <h1 className="text-3xl font-bold mb-4">Task Tracker 🚀</h1>
          <DarkModeToggle />
        </div>
        <TaskForm onAdd={addTask} />
        <div className="w-full">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet. Add one above 👆
            </p>
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
