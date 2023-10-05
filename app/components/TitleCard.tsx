export default function TitleCard() {
  return (
    <div className="flex justify-start items-start text-start text-white font-bold rounded-xl border shadow-lg bg-gradient-to-r from-primary to-offset text-sm w-full my-1 py-4 px-2 p-8 mx-auto">
      <h2 className="uppercase w-1/6">Processor</h2>
      <h2 className="uppercase w-1/6">Cores</h2>
      <h2 className="uppercase w-1/6">Memory</h2>
      <h2 className="uppercase w-1/6">Storage</h2>
      <h2 className="uppercase w-1/6">Transfer</h2>
      <h2 className="uppercase w-1/6">Price</h2>
    </div>
  );
}
