import data from "../data/dedicated.json";

interface ServerCardProps {
  className?: string;
  cpu?: string;
  ram?: string;
  storage?: string;
  bandwidth?: string;
  speed?: string;
  price?: string;
  children?: React.ReactNode;
}

const serverData = data.map((server) => (
  <div
    className="flex flex-col items-start justify-center text-white bg-gray-600 text-sm w-[85%] mx-auto my-1"
    key={server.id}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 p-4">
      <p>{server.cpu}</p>
      <p className="ml-4">{server.ram}</p>
      <p>{server.storage}</p>
      <p>{server.bandwidth}</p>
      <p>{server.speed}</p>
      <p>{server.price}</p>
    </div>
  </div>
));

export default function ServerCard() {
  return [serverData];
}
