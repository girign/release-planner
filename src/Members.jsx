import { useRef } from "react";

export default function Members({
  members,
  handleAddMember,
  handleDeleteMember,
}) {
  const nameRef = useRef();
  const capacityRef = useRef();

  function callAddMember() {
    handleAddMember(nameRef.current.value, capacityRef.current.value);
    nameRef.current.value = "";
    capacityRef.current.value = "";
  }

  return (
    <div className="section">
      <h3>Members</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.name}>
              <td>{member.name}</td>
              <td>{member.capacity}</td>
              <td>
                <button onClick={() => handleDeleteMember(member.name)}>
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
              <input type="number" ref={capacityRef} />
            </td>
            <td>
              <button onClick={callAddMember}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
