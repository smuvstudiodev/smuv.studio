const Footer = () => {
    return (
        <div className='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10 lg:my-10'>
            <div className="bg-[#101012] py-7 px-6 lg:py-20  lg:px-16 rounded-md flex flex-col lg:flex-row lg:justify-between gap-y-5 lg:content-center lg:items-center  w-full">
                <div className="order-2 lg:order-1 text-[#737380] flex flex-col gap-y-2 ">
                    <a href="mailto:hi@smuv.studio" className="text-[16px] lg:text-[20px]">
                        hi@smuv.studio 
                    </a>
                    <a href="tel:+2348156977033" className="text-[16px] lg:text-[20px]"> 
                        +234 ​815 697 7033
                    </a>
                </div>
                <div className="order-1 lg:order-2 lg:translate-x-5">
                <object type="image/svg+xml"  width={48} height={48} data="/images/Logo_Icon_Animation.svg" alt="Smuv Logo" aria-label="Smuv Logo">Smuv Logo</object>
                </div>
                <div className="order-3 text-[#737380] flex gap-x-3">
                <a href="https://twitter.com/smuvcreative" className="text-[16px] lg:text-[20px]"> 
                        Twitter
                    </a>
                    <a href="https://instagram.com/smuvcreative" className="text-[16px] lg:text-[20px]"> 
                        Instagram
                    </a>
                    <a href="https://linkenin.com" className="text-[16px] lg:text-[20px]"> 
                        LinkedIn
                    </a>
                </div> 
            </div>
            <div className="w-full text-center my-[25px] lg:my-100">
                <span className="text-center text-[10px] lg:text-[17px] text-[#737380]">&copy; 2022 Smuv Legacy LTD. RC454332 All rights reserved. </span>
            </div>
        </div>
    )
}
export default Footer;