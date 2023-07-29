export default function AvailableCapacities({ members, tasks }) {
  function calculateAvailableCapacity(member) {
    console.log(
      "calcaval",
      tasks.filter((task) => task.assignee === member.name)
    );
    const occupied = tasks
      .filter((task) => task.assignee === member.name)
      .reduce(
        (accumulator, currentValue) =>
          Number(accumulator) + Number(currentValue.sp),
        0
      );
    return Number(member.capacity) - occupied;
  }

  return (
    <div className="section">
      <h3>Available capacities</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th> Available Capacity</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.name}>
              <td>{member.name}</td>
              <td>{calculateAvailableCapacity(member)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
