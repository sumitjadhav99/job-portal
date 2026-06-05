import { Link } from 'react-router-dom';

const JobCard = ({ job, onSaveJob, showRemoveButton, onRemoveJob }) => {
	return (
		<div className="job-card">
			<div className="job-info">
				<h2 className="job-title">{job.title}</h2>
				<div className="job-meta">
					<p className="job-company">{job.company}</p>
					<p className="job-location">{job.location}</p>
					<p className="job-salary">{job.salary}</p>
				</div>
			</div>

			<button className="apply-btn">Apply</button>

			<Link to={`/jobs/${job.id}`}>View Details</Link>

			{showRemoveButton ? (
				<button onClick={() => onRemoveJob(job.id)}>Remove</button>
			) : (
				<button onClick={() => onSaveJob(job)}>Save</button>
			)}
		</div>
	);
};

export default JobCard;
