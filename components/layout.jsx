import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import NavModal from './nav-modal';

export default function Layout({ children, title }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='relative'>
            <Head>
                <title>Smuv Studio {title && `- ${title}`}</title>
                <meta name="description" content="Smuv, A UX/UI Design Studio" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <nav className='w-full lg:h-100 h-[60px]  backdrop-blur-[80px] bg-[#0B0B0D]'>
                {isOpen && <NavModal options={[isOpen, setIsOpen]} />}
                <div className='flex justify-between align-baseline mx-4 lg:mx-100'>
                    <div className="logo-container ">
                        <div className="logo">
                            <Image src="/images/logo.png" alt="Logo" width={180.64} height={79.33} />
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

            <main>
                {children}</main>

            <footer>

            </footer>
        </div>
    )
}