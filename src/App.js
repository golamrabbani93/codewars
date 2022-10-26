import {Toaster} from 'react-hot-toast';
import {RouterProvider} from 'react-router-dom';
import {router} from './Routes/routes';
import './App.css';
function App() {
	return (
		<div className="App ">
			<RouterProvider router={router}></RouterProvider>
			<Toaster></Toaster>
		</div>
	);
}

export default App;
