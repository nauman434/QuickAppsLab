import Container from '@/components/Container'

const AboutSec = () => {
    return (
        <Container className='pb-[80px]'>
            <div>
                <div>
                    <h2
                        className="text-start md:text-[54px] text-[36px] font-bold font-syne text-primary"
                    >
                        Are you tired of manual data entry and fragmented financial records?
                    </h2>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:mt-10 mt-4'>
                    <div />
                    <p
                        className="leading-[150%] text-gray-400 font-syne md:text-2xl text-lg col-span-2"
                    >
                        At QuickAppsLab, we specialize in creating custom integrations that effortlessly connect your business apps with QuickBooks. Our mission is to simplify your financial management, giving you more time to focus on what really matters—growing your business.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default AboutSec