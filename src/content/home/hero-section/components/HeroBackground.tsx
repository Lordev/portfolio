import Image from 'next/image'

export default function HeroBackground() {

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
                src="/_shared/background.png"
                layout="fill"
                objectFit="cover"
                alt=""
            />
        </div>
    )
}
