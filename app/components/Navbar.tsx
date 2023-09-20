import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

export default function Navbar() {
  return (
    <div>
      <div>
        <Image src={Logo} alt="Logo" width={50} />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
