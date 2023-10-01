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
      <div className="flex flex-col justify-center items-center p-10 border shadow-md rounded-xl">
        <h2 className="font-bold text-primary text-center text-xl">{title}</h2>
        <p className="text-dark text-md mt-5 text-center">{content}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
