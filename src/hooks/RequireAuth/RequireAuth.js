import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../hooks/RequireAuth/RequireAuth';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        // return <div className="flex justify-center items-center">
        //         <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        //             <span className="visually-hidden">Loading...</span>
        //         </div>
        //     </div>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default RequireAuth;