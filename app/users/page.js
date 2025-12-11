"use client";

import { useState } from "react";

export default function Users() {
  const [search, setSearch] = useState("");

  
  const [users, setUsers] = useState([
    { name: "Tarek Eltohamy", email: "tarek@gmail.com", role: "Admin" },
    { name: "Ahmed Ali", email: "ahmed@gmail.com", role: "User" },
    { name: "hager ahmed", email: "hager@gmail.com", role: "User" },
    { name: "Mohamed Samir", email: "mo@mo.com", role: "User" },
    { name: "ibrahim ahmed", email: "ibrahim@gmail.com", role: "User" },
    { name: "mahmoud gamal", email: "mahmoud@gmail.com", role: "User" },
    { name: "nour ahmed", email: "nour@gmail.com", role: "User" },
    { name: "mohamed ahmed", email: "mohamed@gmail.com", role: "User" },
    { name: "karim sameh", email: "karim@gmail.com", role: "User" },
    { name: "abdallah eid", email: "abdallah@gmail.com", role: "User" },
    { name: "esraa mohamed", email: "esraa@gmail.com", role: "User" },
    { name: "menna mahmoud", email: "menna@gmail.com", role: "User" },
  ]);

 
  const addUser = () => {
    const name = prompt("Enter user name:");
    if (!name) return;

    const email = prompt("Enter user email:");
    if (!email) return;

    const newUser = { name, email, role: "User" };

    
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="all">
      <div className="header">
        <h2>Users</h2>
        <button className="add-btn" onClick={addUser}>
          + Add User
        </button>
      </div>

      <div className="content-users">
        <div className="search-user">
          <input
            type="text"
            placeholder="Search user..."
            className="search-name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn-search">Search</button>
        </div>

        <table>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
