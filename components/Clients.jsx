import Image from "next/image";
// import Carousel from 'carousel-react-rcdev'

const Clients = () => {
  return (
    <div className="mt-[50px] lg:mt-[200px]">
      <div>
        {/* <div  ">

          <div className='max-w-screen-2xl lg:flex lg:flex-row grid grid-cols-1 lg:grid-cols-4 gap-4 lg:max-w-10 justify-between lg:gap-x-5 content-center items-center'>
            <div className="module-border-wrap">
              <div className="module">
                <Image src="/images/clients/prosperis.png" alt="Prosperis" width={244} height={48} />
              </div>
            </div>
            <div className="module-border-wrap">
              <div className="module">
                <Image src="/images/clients/one-port-365.png" alt="One Port 365" width={204.53} height={73.06} />
              </div>
            </div>
            <div className="module-border-wrap">
              <div className="module ">
                <Image src="/images/clients/tingtel.png" alt="Tingtel" width={185.18} height={82.04} />
              </div>
            </div>
            <div className="module-border-wrap">
              <div className="module">
                <Image src="/images/clients/green-key.png" alt="Green Key" width={142.28} height={114.12} />
              </div>
            </div>
          </div>
        </div> */}
        {/* MObile */}
        <div className="lg:hidden px-12 xl:px-9 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto md:mt-100 lg:my-3 ">
          <div className="clients max-w-screen-sm ov">
            <div className="prosperis client ">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/prosperis.svg">Prosperis</object>
            </div>
            <div className="oneport-365 client">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/oneport-365.svg">One Port 365</object>
            </div>
            <div className="tingtel client">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/tingtel.svg">Tingtel</object>
            </div>
            <div className="oneport-365 client">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/adspace.svg" aria-label="AdSpace">AdSpace</object>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block px-12 xl:px-9 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto md:mt-100 lg:my-3 ">
          <div className="clients ">
            <div className="prosperis client ">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/prosperis.svg">Prosperis</object>
            </div>
            <div className="oneport-365 client">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/oneport-365.svg">One Port 365</object>
            </div>
            <div className="tingtel client">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/tingtel.svg">Tingtel</object>
            </div>
            <div className="oneport-365 client">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/adspace.svg" aria-label="AdSpace">AdSpace</object>
            </div>
          </div>
        </div>
        
        {/* <Carousel>
        <div className="prosperis client ">
              <object className='' type="image/svg+xml" data="images/clients/prosperis.svg">Prosperis</object>
            </div>
            <div className="oneport-365 client">
              <object className='' type="image/svg+xml" data="images/clients/oneport-365.svg">One Port 365</object>
            </div>
            <div className="tingtel client">
              <object className='' type="image/svg+xml" data="images/clients/tingtel.svg">Tingtel</object>
            </div>
            <div className="oneport-365 client">
              <object className='' type="image/svg+xml" data="images/clients/green-key.svg">Green Key</object>
            </div> 
            </Carousel> */}

        {/* <div className="flex-2e">
          <div className="gradient-border">
          <Image src="/images/clients/green-key.png" alt="Green Key" width={142.28} height={114.12} />
              </div>

          <div className="gradient-border">
          <Image src="/images/clients/green-key.png" alt="Green Key" width={142.28} height={114.12} />
              </div>
        <div className="gradient-border">
        <Image src="/images/clients/green-key.png" alt="Green Key" width={142.28} height={114.12} />
              </div>
              <div className="gradient-border">
        <Image src="/images/clients/green-key.png" alt="Green Key" width={142.28} height={114.12} />
              </div>
        </div> */}
      </div>
    </div>
  )
}
export default Clients