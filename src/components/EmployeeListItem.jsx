/* eslint-disable react/prop-types */
function EmployeeListItem({ employee }) {
  return (
    <div className="employee-list-item">
      <h2>{employee.name}</h2>
      <p>{employee.title}</p>
    </div>
  );
}

export default EmployeeListItem;