import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import searchImages from './api';

const term = 'cars';
searchImages(term);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);