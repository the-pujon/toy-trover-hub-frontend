import { createContext, useContext } from 'react';
import useAuth from '../Hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	return <AuthContext.Provider value={useAuth()} > {children}</AuthContext.Provider>;
};

export const useUserCtx = () => useContext(AuthContext);
