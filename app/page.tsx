import Image from "next/image";
import Hero from "../public/images/hero.webp";
import Card from "./components/Card";
import Logo from "../public/images/logo.png";

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
          <Card title="Services" content="Here are our services we provide." />
          <Card title="Services" content="Here are our services we provide." />
        </div>
      </section>
      {/* Advantages */}
      {/* Features */}
      {/* Partners and Vendors */}
      <section className="mt-10">
        <h1 className="text-xl font-bold flex justify-center items-center">
          Partners and Vendors
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3">
            <Card>
              <Image src={Logo} alt="Logo" width={75} />
            </Card>
            <Card>
              <Image src={Logo} alt="Logo" width={75} />
            </Card>
            <Card>
              <Image src={Logo} alt="Logo" width={75} />
            </Card>
            <Card>
              <Image src={Logo} alt="Logo" width={75} />
            </Card>
            <Card>
              <Image src={Logo} alt="Logo" width={75} />
            </Card>
            <Card>
              <Image src={Logo} alt="Logo" width={75} />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
