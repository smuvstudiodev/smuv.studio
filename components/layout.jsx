import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from './footer';
import NavModal from './nav-modal';

export default function Layout({ children, title }) {
    const [isOpen, setIsOpen] = useState(false);
    // useEffect(()=>{
    //     const navbar = document.querySelector('#navbar');
    //     document.addEventListener('scroll',(e)=>{
    //         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //             navbar.classList.add("backdrop-blur-[80px]");
    //             navbar.classList.remove("backdrop-blur-[80px]");

    //           } else {
    //             navbar.classList.remove("backdrop-blur-[80px]");
    //             navbar.classList.add("backdrop-blur-[80px]");


    //           }
    //     })
    // },[])

    return (
        <div className='relative'>
            <Head>
                <title>Smuv Studio {title && `- ${title}`}</title>
                <meta name="description" content="Smuv, A UX/UI Design Studio" />
                <meta name="theme-color" content="#0B0B0D" />

                <link rel="icon" href="/Logo_Icon_Animation.svg" />
            </Head>

            <nav id='navbar' className='w-full z-40 fixed top-0 left-0 backdrop-blur-[80px] '>
                {isOpen && <NavModal options={[isOpen, setIsOpen]} />}
                <div className='flex justify-between align-baseline mx-4 lg:mx-100 '>
                    <Link href={"/"}>
                        <a className="logo-container cursor-pointer">

                            <div className="logo cursor-pointer">
                                <object type="image/svg+xml" className="lg:w-[150px] lg:h-[70px]" data="/images/Logo_Icon_and_WordMark_Logo_colour_Animation.svg">svg-animation</object>
                                {/* <Image src="" alt="Logo" width={180.64} height={79.33} /> */}
                            </div>

                            <span className="logo-text">A UX/UI Design Studio</span>
                        </a>
                    </Link>
                    <div className='hambugger'>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <Image src="/images/hambugger.png" alt="Hambugger Icon" width={45} height={45} />
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