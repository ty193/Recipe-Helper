import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCjIzj-VoHewYzVrVzS72-nYALVbHwRaEo',
	authDomain: 'recipe-helper-14aaf.firebaseapp.com',
	databaseURL: 'https://recipe-helper-14aaf.firebaseio.com',
	projectId: 'recipe-helper-14aaf',
	storageBucket: 'recipe-helper-14aaf.appspot.com',
	messagingSenderId: '5183599657',
	appId: '1:5183599657:web:bd54dbb7650a612dbf5838',
	measurementId: 'G-XKY3K2VNRW'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
