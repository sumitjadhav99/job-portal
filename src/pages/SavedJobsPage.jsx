import JobCard from "../components/JobCard";

const SavedJobsPage = ({ savedJobs,  onRemoveJob}) => {
	return (
		<div>
			<h1>Saved Jobs</h1>
			<ul>
				{savedJobs.map((job) => (
					<JobCard
						key={job.id}
						job={job}
						showRemoveButton={true}
						onRemoveJob={onRemoveJob}
					/>
				))}
			</ul>
		</div>
	);
};

export default SavedJobsPage;
