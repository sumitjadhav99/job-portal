import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SavedJobsPage from './pages/SavedJobsPage';
const App = () => {
	return (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/saved-jobs' element={ <SavedJobsPage/>} />
		</Routes>
	
		</BrowserRouter>
	)
};

export default App;
