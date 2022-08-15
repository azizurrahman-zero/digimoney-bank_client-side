import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin'
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const PrivateadminRoute = ({children}) => {
    const [user,loading,error]=useAuthState(auth);
    const {admin}=useAdmin(user)
    const location=useLocation();
   
     if(loading){
        return ;
     }

     if(!user || !admin){
        signOut(auth)
        return <Navigate to={"/login"} state={{from:location}} replace />
     }
     return children



};

export default PrivateadminRoute;