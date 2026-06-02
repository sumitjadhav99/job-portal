import JobCard from '../components/JobCard';
import MainLayout from '../layouts/MainLayout';
import '../css/HomePage.css';
import { useState } from 'react';

const HomePage = () => {
	const [savedCount, setSavedCount] = useState(0);

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
  
  const handleSavedJob = () => {
    setSavedCount(savedCount + 1)
  }

	return (
		<MainLayout>
			<h1>Job Portal App</h1>

			<h2>Saved Jobs: {savedCount}</h2>
			<button onClick={() => setSavedCount(savedCount + 1)}>
				Add saved job
			</button>

			{jobs.map((job) => (
				<JobCard
					key={job.id}
          job={job}
          onSaveJob = {handleSavedJob}
				/>
			))}
		</MainLayout>
	);
};

export default HomePage;
