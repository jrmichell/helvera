import Image from "next/image";
import FooterImg from "../../public/images/footer.png";

export default function Footer() {
  return (
    <div className="bg-dark p-4">
      <footer className="flex justify-center items-center">
        <Image src={FooterImg} alt="Footer Image" width={300} />
      </footer>
    </div>
  );
}
