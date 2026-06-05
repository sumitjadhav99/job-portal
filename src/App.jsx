import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SavedJobsPage from './pages/SavedJobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
const App = () => {
	// const jobs = [
	// 	{
	// 		id: 1,
	// 		title: 'Frontend Developer',
	// 		company: 'Google',
	// 		location: 'Pune',
	// 		salary: '₹8 LPA',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'React Developer',
	// 		company: 'Microsoft',
	// 		location: 'Mumbai',
	// 		salary: '₹10 LPA',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'UI Developer',
	// 		company: 'Amazon',
	// 		location: 'Bangalore',
	// 		salary: '₹12 LPA',
	// 	},
	// ];

	const [jobs, setJobs] = useState([]);
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
		fetch('http://localhost:3000/jobs')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setJobs(data);
			});
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
