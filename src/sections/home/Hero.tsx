import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[50vw]">
      <div className="absolute right-1/8 top-1/2 flex items-center justify-center transform -translate-y-1/2 -z-20">
        <div className="w-[40vw] h-[40vw] bg-radial from-purple-900 to-50% to-[var--background] rounded-md"></div>
      </div>
      <div className="h-[50vw] px-12 flex flex-col gap-24 justify-center">
        <h1 className="font-(family-name:--font-commissioner) font-extrabold text-[9.1vw] uppercase leading-[6.9vw] tracking-tighter">
          Hello I{`'`}m
          <div className="text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Lorenzo
          </div>
          <span className="text-orange-600">a frontend Developer</span>
        </h1>
        <div className="">
          <p className="font-(family-name:--font-commissioner) text-[2vw] leading-[3vw] uppercase font-semibold">
            interested in a collab?
          </p>

          <div className="flex space-x-4 mt-4">
            <button className="btn">View my work</button>
            <button className="btn">Contact me</button>
          </div>
        </div>

        <Image
          src="/hero/hero-image.png"
          alt="Picture of the author"
          width={900}
          height={900}
          className="absolute -bottom-12 right-[13vw] w-[52vw] h-[52vw] aspect-square -z-10"
        />
      </div>
    </div>
  );
}
