import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import Courses from '../pages/Courses/Courses';
import FAQ from '../pages/FAQ/FAQ';
import Home from '../pages/Home/Home';

const {createBrowserRouter} = require('react-router-dom');

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/courses',
				element: <Courses></Courses>,
			},
			{
				path: '/faq',
				element: <FAQ></FAQ>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
		],
	},
]);
