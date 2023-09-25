import Image from "next/image";
import Hero from "../public/images/hero.webp";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section>
        <Image src={Hero} alt="Hero Image" className="w-full" />
      </section>
      {/* Services */}
      <section>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          <Card
            title="Services"
            content="Here are our services we provide."
          ></Card>
          <Card
            title="Services"
            content="Here are our services we provide."
          ></Card>
        </div>
      </section>
      {/* Advantages */}
      {/* Features */}
      {/* Partners and Vendors */}
    </div>
  );
}
