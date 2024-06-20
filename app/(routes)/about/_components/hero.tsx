
import Container from '@/components/Container'
import Image from 'next/image'

const Hero = () => {
    return (
        <Container className='w-full '>
            <div className=''>
                <div className='mb-10 md:w-[985px] w-full'>
                    <h2 className='heading_2 text-secondary-navy'>
                        We build custom integrations for data into QuickBooks
                    </h2>
                </div>
                <div className='flex md:flex-row flex-col gap-8 md:items-center items-start justify-between'>
                    <div>
                        <Image src="/stars_dark.svg" width={119} height={131} alt='stars' className='md:w-[119px] w-[72px] md:h-[131px] h-[79px]' />
                    </div>
                    <p className='md:text-[24px] text-[16px] text-muted-stone md:w-[631px] w-full'>
                    We value privacy and confidentiality. We only transfer data between apps and software to QuickBooks. We store nothing.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Hero


