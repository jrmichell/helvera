import Image from "next/image";
import Link from "next/link";
import FooterImg from "../../public/images/footer.png";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcStripe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-dark flex flex-col justify-center items-center p-12">
      <div className="grid grid-cols-1 sm:grid-cols-4 text-primary">
        <div className="xl:text-left text-center mt-4 mr-8">
          <h1 className="font-bold uppercase mb-4">PRODUCTS</h1>
          <ul>
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
            <li className="mb-2">
              <Link className="hover:underline" href="/offers">
                Promotional Offers
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center xl:text-left mr-8">
          <h1 className="font-bold uppercase mb-4">Clients</h1>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Client Area
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Game Control Panel
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Submit a Support Ticket
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Invoices
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Affiliates
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 mt-4 text-center xl:text-left mr-8">
          <h1 className="font-bold uppercase mb-4">Contact</h1>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Pre-Sales Tickets
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                General Enquiries
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Abuse Report Form
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Service Status
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/">
                Knowledgebase
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center xl:text-left mr-8">
          <h1 className="font-bold uppercase mb-4">Legal</h1>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/gdpr">
                GDPR Statement
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/acceptable-use">
                Acceptable Usage Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="/jobs">
                Jobs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-primary mt-8">
        <Image src={FooterImg} alt="Logo" width={240} className="mb-6" />
        <div className="flex justify-center items-center">
          <FaCcPaypal
            className="m-2 hover:text-secondary duration-300 cursor-pointer"
            size={40}
          />
          <FaCcVisa
            className="m-2 hover:text-secondary duration-300 cursor-pointer"
            size={40}
          />
          <FaCcMastercard
            className="m-2 hover:text-secondary duration-300 cursor-pointer"
            size={40}
          />
          <FaCcStripe
            className="m-2 hover:text-secondary duration-300 cursor-pointer"
            size={40}
          />
        </div>
      </div>
      <div className="text-primary mt-12 mb-4 text-center">
        Copyright 2023 &copy; Helvera - Hosting Solutions (All Rights Reserved)
      </div>
    </div>
  );
}
