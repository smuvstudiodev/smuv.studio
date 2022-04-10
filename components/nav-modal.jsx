import Link from "next/link";
import Image from "next/image";

export default function NavModal({ options }) {
    const [isOpen, setIsOpen] = options;
    const closeModal = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='
            absolute top-0 left-0 w-full
            h-full min-h-screen bg-[rgba(0,0,0,0.85)] backdrop-blur-sm
            flex justify-center items-center content-center
            '>
            <div className='text-2xl text-white bg-[#0A0A0D]  backdrop-blur-[20px] h-[510px] w-[520px] rounded-xl py-11 px-[71px]'>
                <div className="relative">
                    <div className="absolute -right-20 -top-24">
                        <button onClick={() => closeModal()}>
                            
                            <Image src="/images/cancle-icon.png" alt="Cancel Icon" width={45} height={45} />
                        </button>
                    </div>
                </div>

                <div>
                <object type="image/svg+xml"  width={48} height={48} data="/images/Logo_Icon_Animation.svg">svg-animation</object>

                {/* <Image src="/images/Logo_Icon_Animation.svg"  alt="Smuv Icon" width={48} height={48} /> */}
                </div>
                <div className="flex modal-links">
                    <Link href="/">
                        <a className="modal-links-item">Home</a>
                    </Link>
                    <Link href="#work">
                        <a className="modal-links-item">Works</a>
                    </Link>
                    <Link href="#blog">
                        <a className="modal-links-item">Blog</a>
                    </Link>
                </div>
                <div className="border-t-2 border-dashed border-[#252529] py-6">
                    <span>Want a smuv experience?</span>
                    <h4>Let{"'"}s talk at hi@smuvstudio.com</h4>
                </div>
            </div>
        </div>
    )
};