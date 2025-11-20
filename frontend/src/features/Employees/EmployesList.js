import { useGetEmployesQuery } from "./employesApiSlice"
import Employee from './Employee'
import styles from '../../css/employesList.module.css'

const EmployeesList = () => {
  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetEmployesQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = employees;
    const tableContent = ids?.length
      ? ids.map(employeeId => <Employee key={employeeId} employeeId={employeeId} />)
      : null;

    content = (
        <div className={styles.centeredContainer}>
            <div className={styles.container}>
            <h2>Employees list</h2>
      <table className={styles.employeeTable}>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Job</th>
            <th>status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableContent}
        </tbody>
      </table>
      </div>
      </div>
    );
  }

  return content;
};

export default EmployeesList;