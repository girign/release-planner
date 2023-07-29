import { useEffect, useState } from "react";
import "./App.css";
import Members from "./Members";
import AvailableCapacities from "./AvailableCapacities";
import localforage from "localforage";
import Tasks from "./Tasks";

function App() {
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localforage.getItem("members").then((members) => {
      if (members) {
        setMembers(members);
      } else {
        setMembers([]);
      }
    });
    localforage.getItem("tasks").then((tasks) => {
      if (tasks) {
        setTasks(tasks);
      } else {
        setTasks([]);
      }
    });
  }, []);

  function handleAddMember(name, capacity) {
    if (members.find((member) => member.name === name)) {
      alert("already added");
    } else {
      const newMembers = [...members];
      newMembers.push({ name, capacity });
      setMembers(newMembers);
      localforage.setItem("members", newMembers);
    }
  }

  function handleDeleteMember(name) {
    const newMembers = members.filter((member) => member.name !== name);
    setMembers(newMembers);
    localforage.setItem("members", newMembers);
  }

  function handleAddTask(name, description, sp, assignee) {
    if (tasks.find((task) => task.name === name)) {
      alert("already added");
    } else {
      const newTasks = [...tasks];
      newTasks.push({ name, description, sp, assignee });
      setTasks(newTasks);
      localforage.setItem("tasks", newTasks);
    }
  }

  function handleDeleteTask(taskName) {
    const newTasks = tasks.filter((task) => task.name !== taskName);
    setTasks(newTasks);
    localforage.setItem("tasks", newTasks);
  }

  return (
    <>
      <Members
        members={members}
        handleAddMember={handleAddMember}
        handleDeleteMember={handleDeleteMember}
      />
      <AvailableCapacities members={members} tasks={tasks} />
      <Tasks
        tasks={tasks}
        members={members}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
