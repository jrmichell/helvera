import Image from "next/image";
import FooterImg from "../../public/images/footer.png";

export default function Footer() {
  return (
    <div className="bg-dark p-4 mt-auto">
      <footer className="flex justify-center items-center">
        <Image
          src={FooterImg}
          alt="Footer Image"
          className="w-[150px] sm:w-[225px] md:w-[300px]"
        />
      </footer>
    </div>
  );
}
