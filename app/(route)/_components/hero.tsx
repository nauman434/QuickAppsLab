import Container from '@/components/Container'
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <Container className='py-24 flex flex-col justify-center items-center'>

            <div>
                <h1
                    className="text-center md:text-[80px] text-[36px] font-bold font-syne md:w-[70vw] w-full text-primary mt-10"
                >
                    Streamline Your Business Operations with Seamless Data Integration
                </h1>
            </div>
            <div className='md:w-[500px] w-full mt-20'>
                <div
                    className='flex flex-col sm:gap-6 gap-8 items-center'
                >
                    <p className='tracking-wide leading-[150%] text-gray-400 sm:text-xl text-normal text-center font-syne'>For more than a decade, merchants on Shopify have trusted Bold apps to help grow their ecommerce stores.</p>
                    <Button className='rounded-full text-[16px] h-[55px] sm:w-[137px] w-full hover:transition-all hover:scale-105 ease-out duration-300 bg-primary-green hover:bg-primary-green text-primary'>
                        Let&apos;s talk
                    </Button>
                </div>


            </div>
        </Container>
    )
}

export default Hero
