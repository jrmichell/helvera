import Image from "next/image";
import Hero from "../public/images/hero.webp";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section>
        <Image src={Hero} alt="Hero Image" className="w-full" />
      </section>
      {/* Services */}
      <section>Here are some of the services we provide.</section>
      {/* Advantages */}
      <section>Here are the advantages of our services.</section>
      {/* Features */}
      <section>
        {/* Use Grid for Features */}Here are the features of our services
      </section>
      {/* Partners and Vendors */}
      <section>Partners and Vendors</section>
    </div>
  );
}
