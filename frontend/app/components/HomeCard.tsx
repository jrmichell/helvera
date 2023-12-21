// Define the Card props
interface CardProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

// Define the Card component
const Card: React.FC<CardProps> = ({ title, content, children }) => {
  return (
    <div className="flex justify-center items-center m-4">
      <div className="flex flex-col items-center p-4 border shadow-md rounded-xl h-[225px] w-[300px]">
        <h2 className="font-bold text-primary text-center text-xl">{title}</h2>
        <p className="text-dark text-sm mt-5 text-center w-[250px] mb-4">
          {content}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Card;
