import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const ContextProvider = ({children}) => {
	const [user, setUser] = useState(null);
	// *get auth
	const auth = getAuth(app);
	// *create user firbase with email and password
	const UserCreateEmailPass = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// *Login user firbase with email and password
	const loginEmailPass = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	// *Get current Login user
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (curentUser) => {
			setUser(curentUser);
		});
		return () => {
			unSubscribed();
		};
	}, []);
	const info = {user, UserCreateEmailPass, loginEmailPass};

	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
