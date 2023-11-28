import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
import * as client from "./client";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
  
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };


  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
      setUser({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (userId) => {
    try {
      const u = await client.findUserById(userId);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <td>
              <input
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </td>
            <td>
              <input
                placeholder="Password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
            <td>
              <input
                placeholder="First Name"
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              />
            </td>
            <td>
              <input
                placeholder="Last Name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </td>
            <td>
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
          <td>
            <BsFillCheckCircleFill onClick={updateUser} style={{ cursor: 'pointer', fontSize: '24px' }}/>
            <BsPlusCircleFill onClick={createUser} style={{ cursor: 'pointer', fontSize: '24px' }}/>
          </td>
          </tr>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.username}</td>
              <td>{u.password}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.role}</td>
              <td>
                <BsPencil onClick={() => selectUser(u._id)}
                  style={{ cursor: 'pointer', fontSize: '24px', marginRight: '10px' }}
                  className="text-warning" />
                <BsTrash3Fill onClick={() => deleteUser(u)}
                style={{ cursor: 'pointer', fontSize: '24px' }}
                className="text-danger" />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
