import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const ContextProvider = ({children}) => {
	const [user, setUser] = useState(null);
	//*craete Loader
	const [loader, setLoader] = useState(true);
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
			setLoader(false);
		});
		return () => {
			unSubscribed();
		};
	}, []);
	//*update user profile
	const userUpdateProfile = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};
	// *google signIn
	const googleProvider = new GoogleAuthProvider();
	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};
	// *user logout function
	const userLogOut = () => {
		return signOut(auth);
	};
	const info = {
		user,
		UserCreateEmailPass,
		loginEmailPass,
		userUpdateProfile,
		userLogOut,
		loader,
		googleSignIn,
	};

	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
