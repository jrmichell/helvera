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
      <section>Services</section>
      {/* Advantages */}
      <section>Advantages</section>
      {/* Features */}
      <section>{/* Use Grid for Features */}Features</section>
      {/* Partners and Vendors */}
      <section>Partners and Vendors</section>
    </div>
  );
}
