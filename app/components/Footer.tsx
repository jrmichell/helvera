import Image from "next/image";
import PaymentImg from "../../public/images/payment.png";
import FooterImg from "../../public/images/footer.png";

export default function Footer() {
  return (
    <div className="bg-dark p-8 text-secondary mt-auto">
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-4 place-items-center text-primary">
          <div className="text-center">
            <h1 className="font-bold uppercase">Links</h1>
            <ul className="m-4">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="text-center">
            <h1 className="font-bold uppercase">Links</h1>
            <ul className="m-4">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="text-center">
            <h1 className="font-bold uppercase">Links</h1>
            <ul className="m-4">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={FooterImg} alt="Logo" width={240} className="mb-6" />
            <Image src={PaymentImg} alt="Payment Methods" width={240} />
          </div>
        </div>
      </div>
    </div>
  );
}
