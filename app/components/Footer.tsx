import Image from "next/image";
import PaymentImg from "../../public/images/payment.png";
import FooterImg from "../../public/images/footer.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-dark p-12 text-secondary mt-auto">
      <div className="grid sm:grid-cols-4 text-primary ">
        <div className="text-center">
          <h1 className="font-bold uppercase">Site Links</h1>
          <ul className="m-4">
            <Link href="/">
              <li className="hover:underline mb-2">Promotional Offers</li>
            </Link>
            <Link href="/game-servers">
              <li className="hover:underline mb-2">Game Server Hosting</li>
            </Link>
            <Link href="/dedicated-servers">
              <li className="hover:underline mb-2">Dedicated Servers</li>
            </Link>
            <Link href="/web-hosting">
              <li className="hover:underline mb-2">Web Hosting</li>
            </Link>
            <Link href="/vps">
              <li className="hover:underline mb-2">VPS Hosting</li>
            </Link>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="font-bold uppercase">Legal</h1>
          <ul className="m-4">
            <Link href="/">
              <li className="hover:underline mb-2">Terms of Service</li>
            </Link>
            <Link href="/">
              <li className="hover:underline mb-2">Privacy Policy</li>
            </Link>
            <Link href="/">
              <li className="hover:underline mb-2">GDPR Statement</li>
            </Link>
            <Link href="/">
              <li className="hover:underline mb-2">Acceptable Usage Policy</li>
            </Link>
          </ul>
        </div>
        <div className="text-center mb-4">
          <h1 className="font-bold uppercase">Contact</h1>
          <ul className="m-4">
            <Link href="/">
              <li className="hover:underline mb-2">Pre-Sales Tickets</li>
            </Link>
            <Link href="/">
              <li className="hover:underline mb-2">Submit a Support Ticket</li>
            </Link>
            <Link href="/">
              <li className="hover:underline mb-2">Abuse Report Form</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={FooterImg} alt="Logo" width={240} className="mb-6" />
          <Image src={PaymentImg} alt="Payment Methods" width={240} />
        </div>
      </div>
    </div>
  );
}
