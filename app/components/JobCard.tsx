// Define the props and the component for the JobCard
interface JobCardProps {
  job: string;
  description: string;
  children?: React.ReactNode;
}

const JobCard: React.FC<JobCardProps> = ({ job, description, children }) => {
  return (
    <div className="border shadow-lg rounded-xl p-10 m-4">
      <h3 className="font-bold text-primary text-center text-xl">{job}</h3>
      <p className="text-dark text-md mt-2 text-center">{description}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default JobCard;
