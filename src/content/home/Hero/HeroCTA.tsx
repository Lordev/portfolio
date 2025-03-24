import Image from "next/image";

export default function HeroCTA() {
  return (
    <>
      <Image
        src={"/hero/scribble.svg"}
        alt="scribble"
        width={710}
        height={296}
        className="absolute bottom-2/50 left-0 w-710 h-296 -z-10 pointer-events-none"
      />

      <div className="absolute bottom-100">
        <h4 className="text-fluid-h4 uppercase font-semibold">
          interested in a collab?
        </h4>
        <div className="flex space-x-4 mt-24">
        </div>
      </div>
    </>
  );
}
