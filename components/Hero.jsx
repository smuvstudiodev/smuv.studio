import { useLayoutEffect } from "react";
import Link from 'next/link';

const Hero = () => {

    useLayoutEffect(() => {
        const { children: titles } = document.querySelector(".animate-text");
        const txtsLen = titles.length;
        let index = 0;
        const textInTimer = 4000;
        const textOutTimer = 3800;

        function animateText() {
            for (let i = 0; i < txtsLen; i++) {
                titles[i].classList.remove("text-in", "text-out");
            }
            titles[index].classList.add("text-in");

            setTimeout(function () {
                titles[index].classList.add("text-out");
            }, textOutTimer);

            setTimeout(function () {
                if (index == txtsLen - 1) {
                    index = 0;
                } else {
                    index++;
                }
                animateText();
            }, textInTimer);
        }

        // window.onload = animateText;
        animateText();
    }, [])

    return (
        <div className="relative mt-[45px] md:mt-[20px] lg:mt-[50px] xl:mt-100   flex justify-center justify-items-center content-center md:max-w-screen-lg xl:max-w-screen-2xl mx-auto">
            <object className='project-cursor hidden top-[-10%] md:top-[-5%]  lg:top-[-2%] z-10 xl:top-[-15%] 2xl:top-[-9%] lg:block absolute  left-[12%] xl:left-[15%] right-100 item-center self-center md:w-[75%] xl:w-[70%]' type="image/svg+xml" data="/images/Hero_Element.svg" alt="Hero Animation">Hero Animation</object>
            <div className="opacity-0 top-[10%] md:top-[15%] z-20 lg:h-[900px] py-100 xl:top-[-15%] 2xl:top-[-9%] md:block absolute  left-[12%] xl:left-[15%] right-100 md:item-center md:self-center md:w-[75%] xl:w-[70%] h-full "/>
            <div className='relative mt-[82px] md:mt-[130px] lg:mt-40 z-30 xl:mt-36 2xl:mt-44  flex flex-col content-center justify-center'>
                <h1 className='heading-text text-[48px] leading-[56px] text-primary px-4  md:text-5xl lg:text-6xl xl:text-[88px] 2xl:text-[92px]  font-bold text-left md:text-center self-start lg:self-center lg:leading-[64px]  xl:leading-[96px]'>
                    A world-class UX-UI  <br className="hidden md:block" /> studio <br className="md:hidden block" /> that loves to create

                    <div className="scroller">
                        <p className="animate-text">
                            <span className=" ">
                                insane designs.
                            </span>
                            <span>
                                perfect user experience.
                            </span>
                            <span>
                                design that converts. 
                            </span> 
                        </p>
                    </div>
                </h1>
                <div className='hero-btn-group lg:my-2 my-5  md:mt-4 lg:mt-5 flex md:justify-between mx-4 md:mx-auto gap-x-4 md:gap-y-4 lg:gap-x-5 max-w-sm md:content-center'>
                    <Link href="/collab">
                        <a className='hero-btn group'>
                            <span>Let{"'"}s Collab</span>
                            <svg width="19" height="16" className='hero-btn-arrow-icon group-hover:fill-[#0A0A0D] lg:fill-[#737380] fill-[#0A0A0D] w-[12.31px]  h-[10.37px] lg:w-[19px] lg:h-4 ' viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.84781 0.334735C10.3116 -0.111578 11.0634 -0.111578 11.5272 0.334735L18.6522 7.19188C19.1159 7.63819 19.1159 8.36181 18.6522 8.80812L11.5272 15.6653C11.0634 16.1116 10.3116 16.1116 9.84781 15.6653C9.38406 15.219 9.38406 14.4953 9.84781 14.049L14.9456 9.14286L1.1875 9.14286C0.531663 9.14286 0 8.63118 0 8C0 7.36882 0.531663 6.85714 1.1875 6.85714H14.9456L9.84781 1.95098C9.38406 1.50467 9.38406 0.781049 9.84781 0.334735Z" />
                            </svg>

                        </a>
                    </Link>
                    <span className='hero-text'>
                        Challenging the norm.
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Hero;
