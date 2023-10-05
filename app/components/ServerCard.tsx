import Link from "next/link";
import TitleCard from "./TitleCard";
import data from "../data/dedicated.json";

const serverData = data.map((server) => (
  <div
    key={server.id}
    className="flex text-center rounded-xl border shadow-lg text-dark text-sm w-full my-2 py-4 px-2"
  >
    <div className="w-1/6">{server.cpu}</div>
    <div className="w-1/6">{server.cores}</div>
    <div className="w-1/6">{server.ram}</div>
    <div className="w-1/6">{server.storage}</div>
    <div className="w-1/6">{server.transfer}</div>
    <div className="w-1/6">{server.price}</div>
    <div>
      <Link
        href="https://my.helvera.co.uk"
        className="p-2 bg-primary hover:bg-secondary hover:text-dark uppercase rounded-xl text-white duration-300 cursor-pointer"
      >
        Configure
      </Link>
    </div>
  </div>
));

export default function ServerCard() {
  return (
    <div className="flex flex-col">
      <TitleCard />
      {serverData}
    </div>
  );
}
