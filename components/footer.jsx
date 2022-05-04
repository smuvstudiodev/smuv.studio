const Footer = () => {
    return (
        <div className='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10 lg:my-10'>
            <div className="bg-[#101012] py-7 lg:py-20  lg:px-16 rounded-xl lg:rounded-md flex flex-col lg:flex-row justify-between gap-y-5 content-center items-center  w-full">
                <div className="order-2 lg:order-1 text-[#737380] flex flex-col gap-y-2 font-semibold">
                    <a href="mailto:hi@smuv.studio" className="text-[16px] lg:text-[20px]">
                        start@smuv.studio
                    </a>
                    <a href="tel:+2348156977033" className="text-[16px] lg:text-[20px]">
                        +234 ​815 697 7033
                    </a>
                </div>
                <div className="order-1 lg:order-2 lg:translate-x-[2.0rem] relative">
                    <div className="client-cover" />
                    <object type="image/svg+xml" className="h-8 w-8 lg:w-12 lg:h-12" data="/images/Logo_Icon_Animation.svg" alt="Smuv Logo" aria-label="Smuv Logo">Smuv Logo</object>
                </div>
                <div className="md:hidden border-t-[0.25px] border-[#212125] w-full order-3" />
                <div className="order-4 text-[#737380] flex gap-x-2 font-semibold">
                    <a href="https://twitter.com/smuvstudio" className="text-[14px] lg:text-[20px] ">
                        Twitter
                    </a>
                    <a href="https://instagram.com/smuvstudio" className="text-[14px] lg:text-[20px]">
                        Instagram
                    </a>
                    <a href="https://linkedin.com/company/smuvstudio" className="text-[14px] lg:text-[20px]">
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="w-full text-center my-[25px] lg:my-100">
                <span className="text-center text-[10px] lg:text-[17px] text-[#737380] font-normal">&copy; 2022 Smuv Legacy LTD. RC454332 All rights reserved. </span>
            </div>
        </div>
    )
}
export default Footer;