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
      <section></section>
      {/* Advantages */}
      <section></section>
      {/* Features */}
      <section>{/* Use Grid for Features */}</section>
    </div>
  );
}
