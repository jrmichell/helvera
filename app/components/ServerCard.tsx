import data from "../data/dedicated.json";
import TitleCard from "./TitleCard";

const serverData = data.map((server) => (
  <div
    key={server.id}
    className="flex justify-between items-start text-dark rounded-xl border shadow-lg text-sm w-full my-1 p-4 mx-auto"
  >
    <p className="w-1/6">{server.cpu}</p>
    <p className="w-1/6">{server.cores}</p>
    <p className="w-1/6">{server.ram}</p>
    <p className="w-1/6">{server.storage}</p>
    <p className="w-1/6">{server.transfer}</p>
    <p className="w-1/6">{server.price}</p>
  </div>
));

export default function ServerCard() {
  return (
    <div className="flex flex-col items-start justify-center">
      <TitleCard />
      {serverData}
    </div>
  );
}
