import './App.css';
import {themeChange} from 'theme-change';
import {useEffect} from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './Routes/routes';

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
