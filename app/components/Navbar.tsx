import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

export default function Navbar() {
  return (
    <div>
      {/* Logo */}
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={50} />
        </Link>
      </div>
      <nav>
        {/* Left side */}
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dedicated-servers">Dedicated Servers</Link>
            </li>
            <li>
              <Link href="/web-hosting">Web Hosting</Link>
            </li>
            <li>
              <Link href="/vps">VPS</Link>
            </li>
            <li>
              <Link href="/game-servers">Game Servers</Link>
            </li>
          </ul>
        </div>
        {/* Right Side */}
        <div>
          <ul>
            <li>
              <Link href="/">Client Area</Link>
            </li>
            <li>
              <Link href="/">cPanel</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
