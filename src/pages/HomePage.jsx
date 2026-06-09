import JobCard from '../components/JobCard';
import MainLayout from '../layouts/MainLayout';
import '../css/HomePage.css';
import { useState } from 'react';

const HomePage = ({ savedJobs, setSavedJobs, jobs, loading, error}) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSavedJob = (job) => {
		const alreadySaved = savedJobs.find((savedJob) => String(savedJob.id) === String(job.id));

		if (!alreadySaved) {
			setSavedJobs([...savedJobs, job]);
		}
	};

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>Something went wrong</h1>;
	}

	const filteredJobs = jobs.filter((job) => {
		return job.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<MainLayout>
			<h1>Job Portal App</h1>

			<h2>Saved Jobs: {savedJobs.length}</h2>
			<h3>Saved Jobs List</h3>

			<ul>
				{savedJobs.map((job) => (
					<li key={job.id}>{job.title}</li>
				))}
			</ul>

			<input
				className='search-input'
				type="text"
				placeholder="Search jobs..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			{filteredJobs.length === 0 && <p>No jobs found.</p>}

			{filteredJobs.map((job) => (
				<JobCard
					key={job.id}
					job={job}
					onSaveJob={handleSavedJob}
				/>
			))}
		</MainLayout>
	);
};

export default HomePage;
