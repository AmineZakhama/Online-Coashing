import styles from '../../css/adminsList.module.css'

const users = [
	{ id: 1, name: 'Mila Kunis', role: 'Super Admin', created: '2013/08/08', status: 'Inactive', email: 'mila@kunis.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 2, name: 'George Clooney', role: 'Admin', created: '2013/08/12', status: 'Active', email: 'marlon@brando.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 3, name: 'Ryan Gossling', role: 'Admin', created: '2013/03/03', status: 'Inactive', email: 'jack@nicholson.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 4, name: 'Emma Watson', role: 'Registered', created: '2004/01/24', status: 'Pending', email: 'humphrey@bogart.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 5, name: 'Robert Downey Jr.', role: 'Admin', created: '2013/12/31', status: 'Active', email: 'spencer@tracy.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 6, name: 'Mila Kunis', role: 'Admin', created: '2013/08/08', status: 'Inactive', email: 'mila@kunis.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 7, name: 'George Clooney', role: 'Member', created: '2013/08/12', status: 'Active', email: 'marlon@brando.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 8, name: 'Ryan Gossling', role: 'Registered', created: '2013/03/03', status: 'Banned', email: 'jack@nicholson.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 9, name: 'Emma Watson', role: 'Registered', created: '2004/01/24', status: 'Pending', email: 'humphrey@bogart.com', avatar: 'https://via.placeholder.com/50' },
	{ id: 10, name: 'Robert Downey Jr.', role: 'Admin', created: '2013/12/31', status: 'Active', email: 'spencer@tracy.com', avatar: 'https://via.placeholder.com/50' },
  ];
  
  const AdminsList = () => {
	return (
	<div className={styles.centeredContainer}>
	  <div className={styles.container}>
		<h2>Admins list</h2>
		<table className={styles.userTable}>
		  <thead>
			<tr className={styles.labels}>
			  <th>Name</th>
			  <th>Created</th>
			  <th>Status</th>
			  <th>Email</th>
			  <th>Actions</th>
			</tr>
		  </thead>
		  <tbody>
			{users.map(user => (
			  <tr key={user.id}>
				<td>
				  <img src={user.avatar} alt={user.name} className={styles.avatar} />
				  <div className={styles.userInfo}>
					<div>{user.name}</div>
					<div className={styles.role}>{user.role}</div>
				  </div>
				</td>
				<td>{user.created}</td>
				<td><span className={`${styles.status} ${styles[`status${user.status}`]}`}>{user.status}</span></td>
				<td>{user.email}</td>
				<td>
				  <button className={`${styles.actionBtn} ${styles.actionBtnView}`}>🔍</button>
				  <button className={`${styles.actionBtn} ${styles.actionBtnEdit}`}>✏️</button>
				  <button className={`${styles.actionBtn} ${styles.actionBtnDelete}`}>🗑️</button>
				</td>
			  </tr>
			))}
		  </tbody>
		</table>
	  </div>
	  </div>
	);
  }
  
  export default AdminsList;