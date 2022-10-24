import './App.css';
import {themeChange} from 'theme-change';
import {useEffect} from 'react';

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<div className="App">
			<h2>hllo</h2>
			<select className="gradientselect" data-choose-theme>
				<option disabled value="">
					Pick a theme
				</option>
				<option value="dark">dark</option>
				<option value="light">Light</option>
			</select>
		</div>
	);
}

export default App;
