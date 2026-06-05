import { useParams, Link } from 'react-router-dom';

const JobDetailsPage = ({ jobs }) => {
	const { id } = useParams();

	const job = jobs.find((job) => {
		return job.id === id;
	});

	console.log('first job id:', jobs[0]?.id);
	console.log('typeof first job id:', typeof jobs[0]?.id);

	console.log('typeof url id:', typeof id);

	if (jobs.length === 0) {
		return <h1>Loading...</h1>;
	}

	if (!job) {
		return <h1>Job not found</h1>;
	}

	return (
		<>
			<h1>{job.title}</h1>
			<p>{job.company}</p>
			<p>{job.location}</p>
			<p>{job.salary}</p>

			<Link to="/">Back to Jobs</Link>
		</>
	);
};

export default JobDetailsPage;
