import Image from "next/image";
import PaymentImg from "../../public/images/payment.png";
import FooterImg from "../../public/images/footer.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-dark flex flex-col justify-center items-center p-12">
      <div className="grid sm:grid-cols-4 text-primary">
        <div className="sm:text-left text-center mt-4 mr-8">
          <h1 className="font-bold uppercase mb-4">Site Links</h1>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Promotional Offers
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/game-servers">
                Game Server Hosting
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/dedicated-servers">
                Dedicated Servers
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/web-hosting">
                Web Hosting
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/vps">
                VPS Hosting
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center sm:text-left mr-8">
          <h1 className="font-bold uppercase mb-4">Legal</h1>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Terms of Service
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                GDPR Statement
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Acceptable Usage Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 mt-4 text-center sm:text-left mr-8">
          <h1 className="font-bold uppercase mb-4">Contact</h1>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Pre-Sales Tickets
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Submit a Support Ticket
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Abuse Report Form
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={FooterImg} alt="Logo" width={240} className="mb-6" />
          <Image src={PaymentImg} alt="Payment Methods" width={240} />
        </div>
      </div>
      <div className="text-primary mt-12 mb-4 text-center">
        Copyright 2023 &copy; Helvera - Hosting Solutions (All Rights Reserved)
      </div>
    </div>
  );
}
