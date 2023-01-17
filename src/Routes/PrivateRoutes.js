import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/UserContexts';
import LoadingSnipper from '../Pages/Sheared/LoadingSnipper';
// import LoadingSpinner from '../components/LoadingSpinner'

// import { AuthContext } from '../contexts/UserContext'

const PrivateRoutes = ({ children }) => {


    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    if (loading) {
        return <LoadingSnipper></LoadingSnipper>
    }

    if (user && user.uid) {
        return children
    }



    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;