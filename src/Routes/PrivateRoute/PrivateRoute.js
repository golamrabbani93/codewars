import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../contexts/ContextProvider/ContextProvider';
import RiseLoader from 'react-spinners/RiseLoader';
const PrivateRoute = ({children}) => {
	//*get user
	const {user, loader} = useContext(AuthContext);
	const location = useLocation();
	if (loader) {
		return (
			<div className="flex justify-center items-center h-96">
				<RiseLoader color="#F26651"></RiseLoader>
			</div>
		);
	}
	if (!user) {
		return <Navigate to="/login" state={{from: location}} replace />;
	}
	return children;
};

export default PrivateRoute;
