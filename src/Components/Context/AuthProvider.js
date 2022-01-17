import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// context use for universal data access
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const authValue = useFirebase();
    return(
        <AuthContext.Provider value = {authValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;