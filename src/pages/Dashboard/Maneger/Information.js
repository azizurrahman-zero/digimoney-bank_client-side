import React, { useState } from "react";

const Information = ({ user, index,users, setUsers,setInformation }) => {
  // const [deleteusers, setDeleteusers] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:4000/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
  
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining);
  
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
      <div class="avatar">
  <div class="w-16 rounded-full">
    <img src={user.img} alt=""/>
  </div>
</div>
      </td>

      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>{user.contact}</td>
      <td>{user.address}</td>

      <td>
        <label
          htmlFor="check-information"
          onClick={() => setInformation(user)}
          className="mx-2 btn btn-xs btn-success"
        >
          Check
        </label>

        <button onClick={() => handleDelete(user._id)} class="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default Information;
