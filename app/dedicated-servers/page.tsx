import Image from "next/image";
import UK from "../../public/images/UK.png";
import ServerCard from "../components/ServerCard";

export default function DediServers() {
  return (
    <div>
      {/* London Servers */}
      <section className="flex flex-col my-10">
        <div className="flex flex-col justify-center items-center">
          <Image src={UK} alt="UK Flag" width={50} />
          <h2 className="flex justify-center items-center font-bold text-primary text-center text-xl mt-2 mb-10">
            United Kindgom Servers
          </h2>
        </div>
        <div className="flex justify-center items-start w-[85%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 text-white bg-gray-800 text-sm w-[85%] p-4">
            <h2 className="uppercase">Processor</h2>
            <h2 className="uppercase">Cores</h2>
            <h2 className="uppercase ml-4">Memory</h2>
            <h2 className="uppercase">Storage</h2>
            <h2 className="uppercase">Transfer</h2>
            <h2 className="uppercase">Price</h2>
          </div>
        </div>
        <div className="mx-auto w-[85%]">
          <ServerCard />
        </div>
      </section>
    </div>
  );
}
