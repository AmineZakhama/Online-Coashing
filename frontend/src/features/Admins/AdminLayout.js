// AdminLayout.js
import { Outlet, useLocation } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import { Link } from "react-router-dom";
import styles from "../../css/adminLayout.module.css"; // Import CSS module

const AdminLayout = () => {
  const location = useLocation();

  return (
    <>
      <AdminHeader />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to="/admin/usersList" className={location.pathname === '/admin/usersList' ? styles.active : ''}>Users</Link>
            </li>
            <li>
              <Link to="/admin/adminsList" className={location.pathname === '/admin/adminsList' ? styles.active : ''}>Admins</Link>
            </li>
            <li>
              <Link to="/admin/employeesList" className={location.pathname === '/admin/employeesList' ? styles.active : ''}>Employees</Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
