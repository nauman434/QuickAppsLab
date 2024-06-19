import Container from '@/components/Container'
import SearchBar from './SearchBar'

const Hero = () => {
    return (
        <Container className='py-24 flex flex-col justify-center items-center'>

            <div>
                <div>
                    <p className='text-center text-gray-300 font-bold'>INTEGRATIONS FOR QUICKBOOKS</p>
                    <h2 className="text-center md:text-[64px] text-[28px] font-bold font-syne md:w-[70vw] w-full text-primary mt-4">
                        Over 300 apps and softwares we integrate into <span className='text-primary-parrot'>QuickBooks</span>
                    </h2>
                </div>
                <SearchBar/>
            </div>
        </Container>
    )
}

export default Hero
