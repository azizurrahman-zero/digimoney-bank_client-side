import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import AllUser from './AllUser';

const AllUsers = () => {
  
    const [search, setSearch] = useState("");
    // handle search user option
    const handleSearch = (event) => {
        let key = event.target.value;
        const match = users.filter(u => u.email.includes(key))
        setSearch(match);


    }


    const { isLoading, error, data:users,refetch } = useQuery(['approvedusers'], () =>
    fetch('https://tranquil-lake-95777.herokuapp.com/approvedUsers').then(res =>
      res.json()
    )
  )
 
   

  if (isLoading || error) {
    return;
  }
    return (
        <div>
            <div>
                <h2 className="text-2xl text-center">Users: {users?.length}</h2>
                <div className='grid justify-items-end mr-9'>
                    <input type="text" onChange={handleSearch} placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                </div>
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
                            {
                                search.length > 0 ?
                            search.map((user, index) => (
                                <AllUser
                                    key={user._id}
                                    user={user}
                                    users={users}
                                    index={index}
                                    refetch={refetch}
                                    
                                >

                                </AllUser>
                            ))
                            :
                            users.map((user, index) => (
                                <AllUser
                                    key={user._id}
                                    user={user}
                                    users={users}
                                    refetch={refetch}
                                    index={index}
                                >

                                        </AllUser>
                                    ))
                            }
                        </tbody>
                    </table>
                   
                </div>
            </div>
        </div>
    );
};

export default AllUsers;