import { heroNavLinks, socialLinks } from '@/lib/data/links';
import LinkLine from '@/components/ui/LinkLine';
import { Heading } from '@/components/ui/Heading';
import Image from 'next/image';

export default function FooterBar() {
    return (
        <>
            <div className='row in-container lg:grid lg:grid-cols-12 pt-96'>
          
            </div>
            <div className='row in-container lg:grid lg:grid-cols-12 mt-120'>
                <div className="text-display-md uppercase flex text-nowrap justify-between max-lg:flex-col max-lg:gap-24 col-span-7 lg:items-center h-fit">
                    <span className='font-thin'>Let's</span>
                    <span className="w-full h-4 bg-neutral-100 mx-24 max-lg:hidden"></span>
                </div>
                {/* <Image src={'/footer-decorative.jpg'} alt='decorative' width={735} height={980} className='h-150 aspect-[735/980] grayscale col-span-3 w-2/4 self-end' />  */}

                {/* <div className='col-span-3 flex flex-col gap-6 col-start-11'>
                <Heading as='h6' size='section-label-sm'>Motto</Heading>
                    <div className="flex flex-col gap-6 mt-4">
                        <p className="text-body text-neutral-400">
                            Writing code is not just about functionality, but also about creativity and expression.
                            I strive to craft elegant and efficient solutions
                        </p>
                    </div>
                </div> */}
            </div>
            <div className='row in-container lg:grid lg:grid-cols-12 mt-24'>
                <Heading as='h6' size='section-label-sm' className='col-span-2 col-start-1 self-end'>© 2024 Lorenzo Sallons</Heading>
                <div className="text-display-md uppercase col-span-6 col-start-3">
                    <div className='font'>Talk.</div>
                </div>
                {/* <Image src={'/footer-decorative.jpg'} alt='decorative' width={735} height={980} className='h-150 aspect-[735/980] grayscale col-start-9 col-span-2 w-4/5 self-end' /> */}
                <div className="col-start-9 flex flex-col border-l border-neutral-500 col-span-2 pl-24">
                    <Heading as='h6' size='section-label-sm'>Get in touch</Heading>
                    <div className="flex flex-col gap-12 mt-24">
                        {/* <LinkLine href={socialLinks.email.href} label={socialLinks.email.label} target="_blank" /> */}
                        <LinkLine href={socialLinks.github.href} label={socialLinks.github.label} target="_blank" />
                        <LinkLine href={socialLinks.linkedIn.href} label={socialLinks.linkedIn.label} target="_blank" />
                    </div>
                </div>
                <div className="col-span-2 col-start-11 flex flex-col border-l border-neutral-500 pl-24">
                    <Heading as='h6' size='section-label-sm'>Navigate</Heading>
                    <div className="flex flex-col gap-12 mt-24">
                        {heroNavLinks.map(link => (
                            <LinkLine key={link.href} href={link.href} label={link.label} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
