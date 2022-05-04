import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from './footer';
import NavModal from './nav-modal';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const navbar = document.querySelector('#navbar');
        document.addEventListener('scroll', (e) => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.add("backdrop-blur-[80px]");
                // navbar.classList.remove("backdrop-blur-[80px]");

            } else {
                navbar.classList.remove("backdrop-blur-[80px]");
                // navbar.classList.add("");


            }
        })
    }, [])
    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.classList.add("scroll-none");
            body.classList.add("h-screen")
            body.classList.add("overflow-hidden")
        } else {
            body.classList.remove("scroll-none");
            body.classList.remove("h-screen")
            body.classList.remove("overflow-hidden")
        }
    }, [isOpen])
    const router = useRouter();

    const goHome = (e) => {
        // e.preventDefault();
        router.push("/");
        console.log(e)
    }

    return (
        <div className='relative'>

            <Head>
                <title>Smuv Studio UI/UX and Frontend development company</title>
                <meta name="description" content="Smuv, A UX/UI Design Studio" />
                <meta name="theme-color" content="#0B0B0D" />

            </Head>
            {isOpen && <NavModal options={[isOpen, setIsOpen]} />}
            <nav id='navbar' className='w-full z-40 lg:py-2 fixed top-0 left-0  '>

                <div className='flex justify-between align-center items-center content-center mx-4 lg:mx-100 relative'>
                    <Link href={"/"}>
                        <a className="logo-container project-cursor">

                            <div className="logo project-cursor" onClick={(e) => goHome(e)}>
                                {/* <svg width="96" height="96">
                                    <image xlinkHref="/images/Logo_Icon_Animation.svg" src="/images/logo-icon.png" width="96" height="96" />
                                </svg> */}
                                <object onClick={(e) => goHome(e)} type="image/svg+xml" className="h-[13px] w-[80px] lg:w-[150px] lg:h-[70px]" data="/images/Smuv_Love_animation.svg" alt="Smuv Love Animation Logo" aria-label="Smuv Love Animation Logo">Smuv Love Animation Logo</object>
                                {/* <Image src="" alt="Logo" width={180.64} height={79.33} /> */}
                            </div>


                            <span className="logo-text">A UX/UI Design Studio</span>
                        </a>
                    </Link>
                    <div className="absolute opacity-0 w-[150px] py-5 px-3 bg-white h-5 project-cursor" onClick={(e) => goHome(e)} />
                    <div className="client-cover cursor-ss-hand" onClick={(e) => goHome(e)} />
                    <div className='hambugger ' >
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Hambugger">
                            {/* <object  onClick={() => setIsOpen(!isOpen)} type="image/svg+xml" className="grayscale hover:grayscale-0 transition-all project-cursor" data="/images/hambugger.svg" alt="Hambugger Icon">Hambugger Icon</object> */}
                            <svg className="grayscale hover:grayscale-0 transition-all project-cursor h-[10px] w-7 lg:h-[15px] lg:w-10 " data="/images/hambugger.svg" alt="Hambugger Icon" width="41" height="15" viewBox="0 0 41 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="8.14185" width="32" height="4" rx="2" fill="url(#paint0_linear_766_579)" />
                                <rect x="0.141846" y="11" width="40" height="4" rx="2" fill="#C4C4C4" />
                                <rect x="0.141846" y="11" width="40" height="4" rx="2" fill="url(#paint1_linear_766_579)" />
                                <defs>
                                    <linearGradient id="paint0_linear_766_579" x1="8" y1="2.5" x2="40.5" y2="2.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF6436" />
                                        <stop offset="1" stopColor="#FF3EC3" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_766_579" x1="-0.0354614" y1="13.5" x2="40.5895" y2="13.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF6436" />
                                        <stop offset="1" stopColor="#FF3EC3" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </button>
                    </div>
                </div>
            </nav>

            <main className='max-w-[1409px] mx-auto overflow-hidden'>
                {children}
            </main>

            <Footer />
        </div>
    )
}
