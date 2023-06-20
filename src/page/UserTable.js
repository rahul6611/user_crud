import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../Api/api';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    fetchUsers()
      .then(responseData => setUsers(responseData))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    createUser(formData)
      .then(() => {
        fetchUsers()
          .then(responseData => {
            setUsers(responseData);
            setFormData({ name: '', email: '', phone: '' });
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();
    updateUser(editingUserId, formData)
      .then(() => {
        fetchUsers()
          .then(responseData => {
            setUsers(responseData);
            setEditingUserId(null);
            setFormData({ name: '', email: '', phone: '' });
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId)
      .then(() => {
        fetchUsers()
          .then(responseData => setUsers(responseData))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>User Table</h2>
      <form onSubmit={editingUserId ? handleUpdateUser : handleAddUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <button type="submit">{editingUserId ? 'Update' : 'Add'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
