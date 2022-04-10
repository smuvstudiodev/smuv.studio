import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
                <link rel="icon" href="/favicon.png" />
            </Head>

            <nav id='navbar' className='w-full z-40 fixed top-0 left-0 backdrop-blur-[80px]'>
                {isOpen && <NavModal options={[isOpen, setIsOpen]} />}
                <div className='flex justify-between align-baseline mx-4 lg:mx-100'>
                    <div className="logo-container ">
                        <div className="logo">
                        <object type="image/svg+xml" data="/images/Logo_Icon_and_WordMark_Logo_colour_Animation.svg">svg-animation</object>
                            {/* <Image src="" alt="Logo" width={180.64} height={79.33} /> */}
                        </div>
                        <span className="logo-text">A UX/UI Design Studio</span>
                    </div>
                    <div className='hambugger'>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <Image src="/images/hambugger.png" alt="Hambugger Icon" width={45} height={45} />
                        </button>
                    </div>
                </div>
            </nav>

            <main className=''>
                {children}</main>

            <footer>

            </footer>
        </div>
    )
}