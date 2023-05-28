import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const store=useSelector((state)=>state.dealerReducer);
    console.log('store:', store)

    if (!store.isAuth) {
        return (
            <Navigate to="/auth" />
            )
    }
    return children
}

export default PrivateRoute