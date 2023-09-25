// Define the Card props
interface CardProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}

// Define the Card component
const Card: React.FC<CardProps> = ({ title, content, children }) => {
  return (
    <div className="flex justify-center items-center m-4">
      <div className="flex flex-col justify-center items-center p-10 hover:shadow-primary shadow-md rounded-xl hover:scale-105 duration-300">
        <h2 className="font-bold text-primary text-center">{title}</h2>
        <p className="text-dark text-center">{content}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
