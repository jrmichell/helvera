import Image from "next/image";
import Hero from "../../public/images/legal.png";

export default function Gdpr() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero */}
      <section>
        <div className="left-[10%] text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl absolute max-w-[50%] top-24 sm:top-28 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          <h1>Helvera Hosting</h1>
          <h1>GDPR Statement</h1>
          <div className="z-1 top-52 max-w-[70%] font-normal text-gray-200 text-lg hidden 2xl:block py-2">
            We operate a simple to understand set of terms that you must comply
            with to use our services. Please read and review these frequently to
            stay up to date.
          </div>
        </div>
        <Image src={Hero} alt="Hero Image" className="w-full" />
      </section>
      {/* Terms of Service */}
      <section className="max-w-[75%]">
        <div className="p-10">
          <h1 className="text-xl font-bold">Last Updated: 4th October 2023.</h1>
          <p>
            Reason:{" "}
            <span className="italic">
              Policy Updated - Changes to Technical section
            </span>
          </p>
          <div className="py-6">
            <h1 className="text-xl font-bold">General Usage</h1>
            {/* <p>Helvera is a trading name associated with Helvera Hosting Ltd (Registered in England & Wales with company numbner 00000000).</p> */}
            <p>
              When ordering a service from us, we require you to be at least 13
              years of age. If you're under the age of 13, you hereby confirm
              that you have consent from a parent or guardian allowing you to
              purchase a service with us.
            </p>
            <p>
              Our services must not be used for anything illegal under UK law.
              In addition to this, our service(s) cannot bne used for the
              purposes of hosting, facilitating or running any of the following,
              whether legal or not:
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Technical</h1>
            <ul className="list-disc px-6">
              <li>Carrying out Distribued Denial of Service attacks</li>
              <li>Carrying out Denial of Service attacks</li>
              <li>
                Hosting and/or facilitating of botnet command & control servers
              </li>
              <li>Spoofing of IP addresses</li>
              <li>Port scanning (includes zmap)</li>
              <li>Sending of unsolicited emails or distributing malware</li>
              <li>Hosting and/or facilitating of phishing websites</li>
              <li>The use of cracked or un-licensed software</li>
              <li>
                Creating tunnels with the express purpose of providing remote
                DDoS protection
              </li>
            </ul>
            <p className="py-2 font-bold">
              You must also not alter any of the following on our hardware (this
              will result in a £35.00 ex VAT charge for each):
            </p>
            <ul className="list-disc px-6">
              <li>Overclocking CPU or memory</li>
              <li>Updating BIOS or firmware</li>
              <li>Updating or changing anything on the IPMI BMC</li>
            </ul>
            <p className="py-2 italic">
              The above lists are not strictly limited to the listed items and
              more may be added in future. If you have any questions or queries
              about content you wish to host, please contact us via our support
              section. If any of your services are found to be breaking the
              above terms, they will be terminated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
