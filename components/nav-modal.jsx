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
        <div className='nav-modal-container backdrop-blur-[300px]' onClick={e=>closeByBody(e)}>
            <div className='nav-modal moving_card_once' onClick={e=>StopCloseByBody(e)}>
                <div className="flex justify-between py-3 content-center items-center pl-7 md:pt-6  md:pb-2  md:pl-7 lg:py-5 lg:pl-[40px] bg-[#101012] rounded-tl-xl rounded-tr-xl">
                    <object type="image/svg+xml" className="w-6 h-6 lg:w-12 lg:h-12 " data="/images/web_icon.svg">svg-animation</object>
                    <div className="flex items-center">
                        <button onClick={() => closeModal()}>
                      
                        {/* <Image src="/images/cancle-icon.png" width={32} height={32} alt="close btn" priority /> */}
                        <img src="/images/close.svg" className="w-[27px] -mt-5 lg:-mt-10  mr-1 lg:w-[45px] h-[27px] lg:h-[45px]" alt="close btn"  />
                        </button>
                    </div>
                
                </div>
                <div className="flex modal-links px-7 lg:px-[45px]">
                    <Link href="/">
                        <a className="modal-links-item"  onClick={() => closeModal()}>Home</a>
                    </Link>
                    <Link href="/#works">
                        <a className="modal-links-item"  onClick={() => closeModal()}>Works</a>
                    </Link>
                        <a href="https://medium.com/@smuvstudio" className="modal-links-item"  onClick={() => closeModal()}>Blog</a>
                   
                </div>
                <div className=" border-t-2 border-dashed border-[#252529] py-2  md:pt-4  px-7 lg:px-[50px]">
                    <span className="text-xs text-[#45454D] lg:text-base font-normal">Want a Blacc experience?</span>
                    <h4 className="text-[#919199] text-sm lg:text-xl font-bold">Let{"'"}s talk at <a href="mailto:start@smuvstudio.com">start@smuvstudio.com</a> </h4>
                </div>
            </div>
        </div>
    )
};