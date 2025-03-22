import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="h-1080 relative py-120 text-center flex flex-col justify-center items-center">
        <Image src="/footer/footer-bg.png" alt="footer image" layout="fill" className="-z-10"/>
        <h1 className="uppercase text-fluid-display1 font-extrabold tracking-tighter">
          Need some help? <br />
          <span className="text-primary-500">
          Get in touch
          </span>
        </h1>
      </div>
      <div className="row in-container grid grid-cols-12 py-64">
        <div className="col-span-5">
            <h6 className="text-title-sm uppercase tracking-widest">My socials</h6>
            <div className="flex mt-10 gap-10">
              <Link href="https://github.com/lordev/" className="text-label-lg uppercase font-light tracking-widest"> 
              Github
              </Link>
              <div className="w-16 relative">
                <div className="border-t-2 border-gray-500 absolute top-1/2 -translate-y-1/2 w-full">

                </div>
              </div>
              <Link href="https://github.com/lordev/" className="text-label-lg uppercase font-light tracking-widest"> 
              Linkedin
              </Link>
            </div>
        </div>
        <div className="col-span-4">
            <h6 className="text-title-sm uppercase tracking-widest">Get in touch</h6>
            <div className="flex mt-10 gap-10">
              <Link href="https://github.com/lordev/" className="text-label-lg uppercase font-light tracking-widest"> 
              info@gmail.com
              </Link>
                      </div>
        </div>
        <div className="col-span-3 flex justify-end">
            <h6 className="text-title-sm uppercase tracking-widest">Estiablished @2025</h6>
        </div>
      </div>
    </footer>
  );
}
