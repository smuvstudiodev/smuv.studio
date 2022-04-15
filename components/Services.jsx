const Services = () => {
    return (
        <>
            <div className='tagline flex flex-col text-center w-[288px] lg:w-[705px] mx-auto justify-center content-center items-center my-9 lg:mb-20 lg:mt-10'>
                <span className="text-[#737380] text-sm lg:text-xl">Your enterprise wants a smarter product that converts?</span>
                <h2 className="font-bold text-3xl lg:text-[92px] lg:leading-[119px] text-[#C2C2CC] ">smuv can help<span>.</span> </h2>
            </div>
            <div className="px-2  xl:px-9 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[17px]  2xl:gap-3">
                    <div className="card">
                        <object type="image/svg+xml" className="card-icon" data="/images/icons/Strategy_Icon.svg">svg-animation</object>
                        <h3 className="card-heading">Strategy</h3>
                        <ul className='card-list'>
                            <li>Discovery chat</li>
                            <li>User Research and Insight</li>
                            <li>Stakeholder Workshops</li>
                        </ul>
                    </div>
                    <div className="card">
                        <object type="image/svg+xml" className="card-icon" data="/images/icons/Experience_Icon.svg">svg-animation</object>
                        <h3 className="card-heading">Experience</h3>
                        <ul className='card-list'>
                            <li>User flow chat</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Usability testing</li>
                        </ul>
                    </div>
                    <div className="card">
                        <object type="image/svg+xml" className="card-icon" data="/images/icons/Design_Icon.svg">svg-animation</object>
                        <h3 className="card-heading">Design</h3>
                        <ul className='card-list'>
                            <li>Brand-conscious UI Design</li>
                            <li>Brand identity design</li>
                            <li>Interaction design</li>
                            <li>Front-end development</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Services