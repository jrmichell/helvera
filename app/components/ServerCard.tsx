import data from "../data/dedicated.json";

const serverData = data.map((server) => (
  <div
    key={server.id}
    className="flex justify-between items-start text-white rounded-xl bg-primary text-sm w-full my-1 p-4 mx-auto"
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
      <div className="flex justify-between items-start text-white font-bold rounded-xl bg-blue-800 text-sm w-full my-1 p-4 mx-auto">
        <h2 className="uppercase w-1/6">Processor</h2>
        <h2 className="uppercase w-1/6">Cores</h2>
        <h2 className="uppercase w-1/6">Memory</h2>
        <h2 className="uppercase w-1/6">Storage</h2>
        <h2 className="uppercase w-1/6">Transfer</h2>
        <h2 className="uppercase w-1/6">Price</h2>
      </div>
      {serverData}
    </div>
  );
}
