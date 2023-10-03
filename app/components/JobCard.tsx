// Define the props and the component for the JobCard
interface JobCardProps {
  job: string;
  description: string;
  children?: React.ReactNode;
}

const JobCard: React.FC<JobCardProps> = ({ job, description, children }) => {
  return (
    <div className="flex justify-center items-center border shadow-lg">
      <h3>{job}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};
