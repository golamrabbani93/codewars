// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC_pXpWABdM7djpu7NCwRXekb7GAp-2Sh4',
	authDomain: 'codewars-hunt.firebaseapp.com',
	projectId: 'codewars-hunt',
	storageBucket: 'codewars-hunt.appspot.com',
	messagingSenderId: '520230621360',
	appId: '1:520230621360:web:650d05ad87d40814e1ab75',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
