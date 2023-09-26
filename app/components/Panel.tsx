// Define the interface for the Panel component props
interface PanelProps {
  children?: React.ReactNode;
  title?: string;
  content?: string;
}

// Define the Panel component
const Panel: React.FC<PanelProps> = ({ children, title, content }) => {
  return (
    <div className="p-8 flex justify-center items-center flex-col max-w-[400px]">
      <div className="flex justify-center items-center mb-2 text-primary">
        {children}
      </div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="sm:text-md text-sm text-center">{content}</p>
    </div>
  );
};

export default Panel;
