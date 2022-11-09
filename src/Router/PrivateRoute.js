import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner
        aria-label="Extra large spinner example"
        size="xl"
      />
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;

