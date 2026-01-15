import { useState, useEffect } from "react";
import { Task } from "./components/task";
import { TaskForm } from "./components/taskForm";
import { Layout } from "./components/layout";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { TaskModal } from "./components/TaskModal";
import { Navbar } from "./components/Navbar";

type TaskType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
};

const API_BASE_URL = "http://localhost:5000"

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [currentDate, setCurrentDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch tasks from the backend for the current date
    fetchTasks();
  }, [currentDate]);

 const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks?userId=yourUserId&date=${currentDate}`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const toggleTask = async (id: string) => {
    try {
      const task = tasks.find(task => task.id === id);
      await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task?.completed })
      });
      fetchTasks();
    } catch (error) {
      console.error("Failed to toggle task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "DELETE"
      });
      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

const addTask = async (task: Omit<TaskType, "id"> & { completed?: boolean }) => {
  try {
    await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, completed: false, userId: "yourUserId" }) // Include userId and set completed default
    });
    fetchTasks();
  } catch (error) {
    console.error("Failed to add task:", error);
  }
};

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
    <Layout>
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-3xl font-bold mb-4">Task Tracker 🚀</h1>
        <DarkModeToggle />
      </div>

      <Navbar currentDate={currentDate} setCurrentDate={setCurrentDate} />

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />

      <TaskForm onAdd={() => setIsModalOpen(true)} />

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet. Add one above 👆</p>
      ) : (
        filteredTasks.map((task) => (
          <Task key={task.id} {...task} onToggle={toggleTask} onDelete={deleteTask} />
        ))
      )}

      <TaskModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onAddTask={addTask} />
    </Layout>
  );
}

export default App;

// import { useState } from "react";
// import { Task } from "./components/task";
// import { TaskForm } from "./components/taskForm";
// import { Layout } from "./components/layout";
// import { DarkModeToggle } from "./components/DarkModeToggle";

// type TaskType = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

// function App() {
//   const [tasks, setTasks] = useState<TaskType[]>([
//     { id: 1, title: "Learn React", completed: false },
//     { id: 2, title: "Setup GitHub", completed: true },
//     { id: 3, title: "Get Started", completed: true },
//   ]);

//   const toggleTask = (id: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const addTask = (title: string) => {
//     setTasks([...tasks, { id: Date.now(), title, completed: false }]);
//   };

//   return (
//     <>
//       <Layout>
//         <div className="flex items-center justify-between w-full mb-4">
//           <h1 className="text-3xl font-bold mb-4">Task Tracker 🚀</h1>
//           <DarkModeToggle />
//         </div>
//         <TaskForm onAdd={addTask} />
//         <div className="w-full">
//           {tasks.length === 0 ? (
//             <p className="text-center text-gray-500">
//               No tasks yet. Add one above 👆
//             </p>
//           ) : (
//             tasks.map((task) => (
//               <Task
//                 key={task.id}
//                 {...task}
//                 onToggle={toggleTask}
//                 onDelete={deleteTask}
//               />
//             ))
//           )}
//         </div>
//       </Layout>
//     </>
//   );
// }

// export default App;
