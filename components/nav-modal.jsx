import Link from "next/link";
import Image from "next/image";

export default function NavModal({ options }) {
    const [isOpen, setIsOpen] = options;
    const closeModal = () => {
        setIsOpen(!isOpen);
    }
    const closeByBody=(e)=>{
        e.stopPropagation();
        setIsOpen(!isOpen);
    }
    const StopCloseByBody=(e)=>{
        e.stopPropagation();
    }

    return (
        <div className='nav-modal-container backdrop-blur-[100px]' onClick={e=>closeByBody(e)}>
            <div className='nav-modal' onClick={e=>StopCloseByBody(e)}>
                <div className="relative">
                    <div className="absolute -right-8 -top-20 lg:-right-20 lg:-top-24">
                        <button onClick={() => closeModal()}>
                      
                        {/* <Image src="/images/cancle-icon.png" width={32} height={32} alt="close btn" priority /> */}
                        <img src="/images/cancle-icon.png" width={32} height={32} alt="close btn"  />
                        </button>
                    </div>
                </div>

                <div>
                    <object type="image/svg+xml" className="w-6 h-6 lg:w-12 lg:h-12 " data="/images/Logo_Icon_Animation.svg">svg-animation</object>
                </div>
                <div className="flex modal-links">
                    <Link href="/">
                        <a className="modal-links-item">Home</a>
                    </Link>
                    <Link href="#works">
                        <a className="modal-links-item">Works</a>
                    </Link>
                    <Link href="#blog">
                        <a className="modal-links-item">Blog</a>
                    </Link>
                </div>
                <div className=" border-t-2 border-dashed border-[#252529] py-6 lg:py-8">
                    <span className="text-xs text-[#45454D] lg:text-base">Want a smuv experience?</span>
                    <h4 className="text-[#919199] text-sm lg:text-xl">Let{"'"}s talk at <a href="mailto:start@smuvstudio.com">start@smuvstudio.com</a> </h4>
                </div>
            </div>
        </div>
    )
};