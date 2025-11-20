import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectEmployeeById } from './employesApiSlice'
import styles from '../../css/employesList.module.css'

const Employee = ({ employeeId }) => {
    const employee = useSelector(state => selectEmployeeById(state, employeeId))

    const navigate = useNavigate()

    if (employee) {
        const handleEdit = () => navigate(`/offers/employes/${employeeId}`)

       

       

        return (
            <tr className="table__row employee">
                <td>
                <img src="https://via.placeholder.com/50"alt={employee.name} width="50px" className={styles.avatar} />
                <div className={styles.userInfo}>
                    {employee.employeename}
                </div>
                </td>
                <td>{employee.job}</td>
                <td><span className={`${styles.status} ${styles[`status${employee.status}`]}`}>{employee.status}</span></td>
                <td>
                    <button
                        className={`${styles.iconButton} ${styles.tableButton}`}
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Employee