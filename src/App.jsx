import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SavedJobsPage from './pages/SavedJobsPage';
const App = () => {
	const [savedJobs, setSavedJobs] = useState(() => {
		const storedJobs = localStorage.getItem('savedJobs');
		const parsedJobs = JSON.parse(storedJobs);
		return parsedJobs || [];
	});

	const handleRemoveJob = (id) => {
		const updatedJobs = savedJobs.filter((job) => {
			return job.id !== id;
		});

		setSavedJobs(updatedJobs);
	};

	useEffect(() => {
		localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
	}, [savedJobs]);

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
