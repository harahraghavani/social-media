import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const initAuth = () => { }

    const handleLogin = () => { }

    const values = {
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        profileApi: initAuth
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;

}

export { AuthContext, AuthProvider }