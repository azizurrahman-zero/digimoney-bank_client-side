import React, { useEffect, useState } from "react";
import CheckInformation from "./CheckInformation";
import Information from "./Information";

const UserRequest = () => {
  const [users, setUsers] = useState([]);
  const [information, setInformation] = useState(null);
  const [deleteusers, setDeleteusers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
 
 
  return (
    
      <div>
        <h2 className="text-2xl text-center">All Request: {users.length}</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                
                <Information
                  key={user._id}
                  user={user}
                  index={index}
                  users={users}
                  setInformation={setInformation}
                ></Information>
              ))}
            </tbody>
          </table>
          {information && <CheckInformation
          information={information}
          

          />}
        </div>
      </div>

      
    
  );
};

export default UserRequest;
