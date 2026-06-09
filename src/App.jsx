import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SavedJobsPage from './pages/SavedJobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
const App = () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [savedJobs, setSavedJobs] = useState(() => {
		const storedJobs = localStorage.getItem('savedJobs');
		const parsedJobs = JSON.parse(storedJobs);
		return parsedJobs || [];
	});

	const handleRemoveJob = (id) => {
		const updatedJobs = savedJobs.filter((job) => {
			return String(job.id) !== String(id);
		});

		setSavedJobs(updatedJobs);
	};

	useEffect(() => {
		localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
	}, [savedJobs]);

	useEffect(() => {
		fetch('/jobs.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setJobs(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false)
		})
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							savedJobs={savedJobs}
							setSavedJobs={setSavedJobs}
							jobs={jobs}
							loading={loading}
							error={error}
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
				<Route
					path="/jobs/:id"
					element={<JobDetailsPage jobs={jobs} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
