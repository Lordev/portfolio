import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[50vw] px-[var(--p-fluid-md)]">
      <div className="absolute right-1/8 top-1/2 flex items-center justify-center transform -translate-y-1/2 -z-20">
        <div className="w-[40vw] h-[40vw] bg-radial from-purple-900 to-50% to-[var--background] rounded-md"></div>
      </div>
      <div className="h-[50vw] flex flex-col gap-64 justify-center">
        <div>
          <h1 className="uppercase text-fluid-display1 font-extrabold tracking-tighter">
            Hello I{`'`}m
            <div className="text-black drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              Lorenzo
            </div>
            <span className="text-primary-500">a frontend Developer</span>
          </h1>
          <div className="mt-[var(--marpadBig)]">
            <h4 className="text-fluid-h4  uppercase font-semibold">
              interested in a collab?
            </h4>

            <div className="flex space-x-4 mt-4">
              <button className="btn">View my work</button>
              <button className="btn">Contact me</button>
            </div>
          </div>

          <Image
            src="/hero/hero-image.png"
            alt="Picture of the author"
            width={1206}
            height={1162}
            className="absolute -bottom-1/16 left-1/3 -z-10 w-1000 aspect-[1206/1162]"
          />
        </div>
      </div>
    </div>
  );
}
