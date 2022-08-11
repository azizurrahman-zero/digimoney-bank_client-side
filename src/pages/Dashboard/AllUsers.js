import React, { useEffect, useState } from 'react';
import AllUser from './AllUser';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/approvedUsers")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        <div>
            <div>
                <h2 className="text-2xl text-center">Users: {users.length}</h2>
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
                                <th>Address</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <AllUser
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    setUsers={setUsers}
                                >

                                </AllUser>
                            ))}
                        </tbody>
                    </table>
                    {/* {information && <CheckInformation
          information={information}
          

          />} */}
                </div>
            </div>
        </div>
    );
};

export default AllUsers;