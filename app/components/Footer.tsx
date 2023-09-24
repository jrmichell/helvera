import Image from "next/image";
import FooterImg from "../../public/images/footer.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <Image src={FooterImg} alt="Footer Image" width={300} />
      </footer>
    </div>
  );
}
