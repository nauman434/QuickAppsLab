import Container from '@/components/Container'

const Hero = () => {
    return (
        <Container className='py-24 flex flex-col justify-center items-center'>

            <div>
                <div>
                    <p className='text-center text-gray-500 font-bold'>INTEGRATIONS FOR QuickBooks</p>
                    <h2 className="text-center md:text-[64px] text-[48px] font-bold font-syne md:w-[70vw] w-full text-primary ">
                        Over 300 apps and softwares we integrate into <span className='text-primary-parrot'>QuickBooks</span>
                    </h2>
                </div>
            </div>
        </Container>
    )
}

export default Hero
