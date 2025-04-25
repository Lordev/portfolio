import Image from "next/image";

export default function AboutImage() {
return (
    <div
      className="overflow-hidden relative w-full h-full"
    >
      <div
        className="lg:absolute lg:inset-0"
      >
        <Image  src="/about/img-headshot.png" alt="Headshot" layout="fill" className="max-lg:opacity-50" />
      </div>
    </div>
  );
}
