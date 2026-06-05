import JobCard from '../components/JobCard';
import MainLayout from '../layouts/MainLayout';
import '../css/HomePage.css';
import { useState } from 'react';

const HomePage = ({ savedJobs, setSavedJobs }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const jobs = [
		{
			id: 1,
			title: 'Frontend Developer',
			company: 'Google',
			location: 'Pune',
			salary: '₹8 LPA',
		},
		{
			id: 2,
			title: 'React Developer',
			company: 'Microsoft',
			location: 'Mumbai',
			salary: '₹10 LPA',
		},
		{
			id: 3,
			title: 'UI Developer',
			company: 'Amazon',
			location: 'Bangalore',
			salary: '₹12 LPA',
		},
	];

	const handleSavedJob = (job) => {
		const alreadySaved = savedJobs.find((savedJob) => savedJob.id === job.id);

		if (!alreadySaved) {
			setSavedJobs([...savedJobs, job]);
		}
	};

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
