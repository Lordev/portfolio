import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";

const aboutChips: string[] = [
  "Design",
  "Develop",
  "Wireframing",
  "UX",
  "Responsiveness",
  "Prototyping",
  "Testing",
  "Deployment",
];

export default function AboutSection() {
  return (
    <section className="relative row py-240">
      <div className="absolute h-4/5 -translate-x-6/12 aspect-[1495/1076] top-9/16 transform -translate-y-1/2 -z-10">
        <Image
          className=" "
          src="/about/pc-background.png"
          alt=""
          layout="fill"
        />
      </div>
      <div className="row in-container">
        <div className="grid grid-cols-6 gap-24">
          <div className="col-span-2">
            <SectionHeading title="About" />
          </div>
          <div className="col-span-4">
            <div className="text-fluid-h3 col-span-2 text-gray-400 font-medium">
              “I{"'"}m a web enthusiast who loves turning ideas into interactive
              experiences. When I{"'"}m not, I{"'"}m probably exploring new tech
              trends or brewing the perfect of coffee.”
            </div>
          </div>
          <div className="col-start-3 col-span-2 flex flex-col justify-center gap-24">
            <div className="grid-cols-2 grid col-span-2 gap-24">
              <p className="text-gray-400">
                “I{"'"}m a web enthusiast who loves turning ideas into
                interactive experiences. When I{"'"}m not, I{"'"}m probably
                exploring new tech trends or brewing the perfect of coffee.” “I
                {"'"}m a web enthusiast who loves turning ideas into
                interactive.
              </p>
              <p className="text-gray-400">
                “I{"'"}m a web enthusiast who loves turning ideas into
                interactive experiences. When I{"'"}m not, I{"'"}m probably
                exploring new tech trends or brewing the perfect of coffee.”
              </p>
            </div>
            <div className="col-span-2 self-start flex flex-wrap gap-16">
              {aboutChips.map((chip) => (
                <Chip label={chip} key={chip} />
              ))}
            </div>
          </div>
          <div className="col-start-5 col-span-2">
            <Image
              src="/about/img-headshot.png"
              width={900}
              height={900}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
