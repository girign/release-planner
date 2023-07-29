import { useRef } from "react";

export default function Tasks({
  tasks,
  members,
  handleAddTask,
  handleDeleteTask,
}) {
  const nameRef = useRef();
  const descRef = useRef();
  const spRef = useRef();
  const assigneeRef = useRef();

  function callAddTask() {
    handleAddTask(
      nameRef.current.value,
      descRef.current.value,
      spRef.current.value,
      assigneeRef.current.value
    );
    nameRef.current.value = "";
    descRef.current.value = "";
    spRef.current.value = 0;
    assigneeRef.current.value = "";
  }

  return (
    <div className="section">
      <h3>Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>SP</th>
            <th>Assignee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.sp}</td>
              <td>{task.assignee}</td>
              <td>
                <button onClick={() => handleDeleteTask(task.name)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input type="text" ref={nameRef} />
            </td>
            <td>
              <input type="text" ref={descRef} />
            </td>
            <td>
              <input type="number" ref={spRef} />
            </td>
            <td>
              <select ref={assigneeRef}>
                {members.map((member) => (
                  <option key={member.name} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button onClick={callAddTask}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
