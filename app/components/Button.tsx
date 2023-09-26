type content = string;

const Button = ({ content }: { content: content }) => {
  return (
    <button className="bg-primary hover:bg-secondary hover:text-dark font-bold duration-300 p-4 m-5 rounded-xl text-white">
      {content}
    </button>
  );
};

export default Button;
