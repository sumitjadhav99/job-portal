import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SavedJobsPage from './pages/SavedJobsPage';
import { useState } from 'react';
const App = () => {
	const [savedJobs, setSavedJobs] = useState([]);

	const handleRemoveJob = (id) => {
		const updatedJobs = savedJobs.map((job) => job.id !== id);

		setSavedJobs(updatedJobs);
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							savedJobs={savedJobs}
							setSavedJobs={setSavedJobs}
						/>
					}
				/>
				<Route
					path="/saved-jobs"
					element={
						<SavedJobsPage
							savedJobs={savedJobs}
							onRemoveJob={handleRemoveJob}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
