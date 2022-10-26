import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import Courses from '../pages/Courses/Courses';
import FAQ from '../pages/FAQ/FAQ';
import Home from '../pages/Home/Home';
import CourseDetails from '../pages/shared/CousesSummary/CourseDetails/CourseDetails';
import Register from '../pages/shared/Login/Register/Register';

const {createBrowserRouter} = require('react-router-dom');

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				loader: () => {
					return fetch('https://codewars-server.vercel.app/courses');
				},
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
			{
				path: '/course-details/:id',
				loader: ({params}) => {
					return fetch(`https://codewars-server.vercel.app/course-details/${params.id}`);
				},
				element: <CourseDetails></CourseDetails>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
		],
	},
	{
		path: '*',
		element: <h2>page no found</h2>,
	},
]);
