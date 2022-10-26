import React, {createContext} from 'react';

export const AuthContext = createContext();
const ContextProvider = ({children}) => {
	const user = 'rabbani';
	const info = {user};
	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
