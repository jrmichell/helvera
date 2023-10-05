import Link from "next/link";
import TitleCard from "./DediTitleCard";
import data from "../data/dedicated.json";
import Button from "./Button";

const serverData = data.map((server) => (
  <div
    className="flex justify-start items-start rounded-xl border shadow-lg text-dark text-sm w-full my-2 py-4 px-2"
    key={server.id}
  >
    <div className="w-1/6">{server.cpu}</div>
    <div className="w-1/6">{server.cores}</div>
    <div className="w-1/6">{server.ram}</div>
    <div className="w-1/6">{server.storage}</div>
    <div className="w-1/6">{server.transfer}</div>
    <div className="w-1/6">{server.price}</div>
  </div>
));

export default function ServerCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <TitleCard />
      {serverData}
      <Link className="mt-4" href="https://my.helvera.co.uk">
        <Button content="Configure Now" />
      </Link>
    </div>
  );
}
