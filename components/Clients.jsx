/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
// import Carousel from 'carousel-react-rcdev'

const Clients = () => {
  return (
    <div className="mt-[50px] lg:mt-[200px]">
      <div>

        {/* MObile */}
        <div className="lg:hidden  max-w-screen-lg md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto md:mt-100 lg:my-3 ">
          <div className="clients clients-slider  max-w-screen-sm ov">
            <div className="prosperis client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/prosperis.svg">Prosperis</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/oneport-365.svg">One Port 365</object>
            </div>
            <div className="tingtel client border-[0.25px]  border-[#212125]  w-[170px] px-7 ">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/tingtel.svg">Tingtel</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/adspace.png" aria-label="AdSpace">AdSpace</object>
            </div>
            <div className="prosperis client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/prosperis.svg">Prosperis</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/oneport-365.svg">One Port 365</object>
            </div>
            <div className="tingtel client border-[0.25px]  border-[#212125]  w-[170px] px-7 ">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/tingtel.svg">Tingtel</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/adspace.png" aria-label="AdSpace">AdSpace</object>
            </div>
            <div className="prosperis client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/prosperis.svg">Prosperis</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/oneport-365.svg">One Port 365</object>
            </div>
            <div className="tingtel client border-[0.25px]  border-[#212125]  w-[170px] px-7 ">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/tingtel.svg">Tingtel</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/adspace.png" aria-label="AdSpace">AdSpace</object>
            </div> <div className="prosperis client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/prosperis.svg">Prosperis</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/oneport-365.svg">One Port 365</object>
            </div>
            <div className="tingtel client border-[0.25px]  border-[#212125]  w-[170px] px-7 ">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/tingtel.svg">Tingtel</object>
            </div>
            <div className="oneport-365 client border-[0.25px]  border-[#212125]  w-[170px] px-7">
            <div className="client-cover"/>
              <object className='project-cursor' type="image/svg+xml" data="images/clients/adspace.png" aria-label="AdSpace">AdSpace</object>
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
              {/* <object className='project-cursor' type="image/svg+xml" data="images/clients/adspace.png" aria-label="AdSpace">AdSpace</object> */}
              <img src={"images/clients/adspace.png"} alt="Adspace" />
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
export default Clients
