import Image from "next/image";

export default function HeroImage() {
  return (
    <>
      <Image
        src="/hero/hero-image.png"
        alt="Picture of the author"
        width={1206}
        height={1162}
        className="z-10 w-1000 aspect-[1206/1162] absolute -bottom-35 left-650"
      />
      <div className="absolute right-1/8 top-1/2 flex items-center justify-center transform -translate-y-1/2 -z-20 ">
        <div className="w-[40vw] h-[40vw] bg-radial from-purple-900 to-50% to-[var--background] rounded-md"></div>
      </div>
    </>
    
  );
}
