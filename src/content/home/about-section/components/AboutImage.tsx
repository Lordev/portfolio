import Image from 'next/image';

export default function AboutImage() {
    return (
        <div
            className="relative h-full w-full overflow-hidden top-0 opacity-70"
            style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)' }}
        >
            <Image
                src="/about/img-headshot.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
            />
        </div>
    );
}
