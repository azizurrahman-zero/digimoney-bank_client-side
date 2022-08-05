import React from 'react';

const AllUser = ({ user, index }) => {
    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={user.img} alt="" />
                    </div>
                </div>
            </td>

            <td>{user.displayName}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>
            <td>{user.address}</td>

            {/* <td>
        <label
          htmlFor="check-information"
          onClick={() => setInformation(user)}
          className="mx-2 btn btn-xs btn-success"
        >
          Check
        </label>

        <button onClick={() => handleDelete(user._id)} class="btn btn-xs btn-error">Cancel</button>
      </td> */}
        </tr>
    );
};

export default AllUser;