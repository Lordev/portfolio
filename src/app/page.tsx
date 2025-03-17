import Nav from "@/components/Nav";
import Image from "next/image";
import Heading from "@/components/Heading";
import Chip from "@/components/Chip";

const aboutChips : string[] = [
  "Design",
  "Develop",
  "Wireframing",
  "UX",
  "Responsiveness",
  "Prototyping",
  "Testing",
  "Deployment",
];



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Nav />
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
      <div className="relative">
        <div className="absolute -left-3/5 h-4/5 w-full top-1/2 transform -translate-y-1/2">
          <Image
            className=" "
            src="/about/pc-background.png"
            alt=""
            layout="fill"
          />
        </div>
        <div className="grid grid-cols-6 gap-6 px-30 py-60">
          <div className="col-span-2">
            <Heading title="About" />
          </div>
          <div className="col-span-4">
            <p className="text-5xl col-span-2 text-gray-400">
              “I{"'"}m a web enthusiast who loves turning ideas into interactive
              experiences. When I{"'"}m not, I{"'"}m probably exploring new tech
              trends or brewing the perfect of coffee.”
            </p>
          </div>
          <div className="col-start-3 col-span-2 flex flex-col justify-center gap-12">
            <div className="grid-cols-2 grid col-span-2">
              <p className="text-gray-400">
                {" "}
                “I{"'"}m a web enthusiast who loves turning ideas into
                interactive experiences. When I{"'"}m not, I{"'"}m probably
                exploring new tech trends or brewing the perfect of coffee.” “I
                {"'"}m a web enthusiast who loves turning ideas into
                interactive.
              </p>
              <p className="text-gray-400">
                {" "}
                “I{"'"}m a web enthusiast who loves turning ideas into
                interactive experiences. When I{"'"}m not, I{"'"}m probably
                exploring new tech trends or brewing the perfect of coffee.””
              </p>
            </div>
            <div className="col-span-2 self-start flex flex-wrap gap-4">
              {aboutChips.map((chip) => (
                <Chip label={chip} key={chip}/>
              ))}
            </div>
          </div>
          <div className="col-start-5 col-span-2 border-8 border-orange-900">
            <Image
              src="/about/img-headshot.png"
              width={900}
              height={900}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
