import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout title={"UI/UX and Frontend company."}>

      <div className="relative mt-100 xl:mt-100  2xl:mt-[200px] flex justify-center justify-items-center content-center md:max-w-screen-lg xl:max-w-screen-2xl mx-auto">
        <object className='hidden top-[-10%] md:top-[-15%] xl:top-[-15%] md:block absolute left-[12%] xl:left-[15%] right-100 item-center self-center md:w-[75%] xl:w-[70%]' type="image/svg+xml" data="/images/Hero_Element.svg"></object>
        <div className='relative mt-[82px]  lg:mt-40 xl:mt-44   flex flex-col content-center justify-center'>
          <h1 className='heading-text text-[26px] text-primary md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-center self-center'>
            A word-class UX-UI <br className="hidden md:block" /> studio that love to create
            <span className="inline-block md:block my-[6px] md:my-4">
              insane designs.
            </span>
          </h1>

          <div className='hero-btn-group lg:my-5 mt-10 flex flex-col lg:flex-row justify-between mx-auto gap-y-4 lg:gap-x-5 max-w-sm content-center'>
            <Link href="/contact">
              <a className='hero-btn group'>
                <span>Let{"'"}s Collab</span>
                <svg width="19" height="16" className='hero-btn-arrow-icon group-hover:fill-[#0A0A0D] lg:fill-[#737380] fill-[#0A0A0D] w-[19px] h-4 ' viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* Clients */}

      {/* <div className='mt-20 lg:mt-100 grid grid-cols-4 gap-x-3 mx-auto lg:max-w-screen-lg'>
          <div className="module-border-wrap">
            <div className="module">
              <img src="/images/clients/prosperis.png" alt="Prosperis" />
            </div>
          </div>
          <div className="module-border-wrap">
            <div className="module">
              <img src="/images/clients/one-port-365.png" alt="One Port 365"/>
            </div>
          </div>
          <div className="module-border-wrap">
            <div className="module ">
              <img className='img' src="/images/clients/tingtel.png" alt="Tingtel"/>
            </div>
          </div>
          <div className="module-border-wrap">
            <div className="module">
              <img src="/images/clients/green-key.png" alt="Green Key"/>
            </div>
          </div>
        </div> */}


      <div>  
        <div className="mt-[300px] ">
        
        <div className='hidden lg:flex lg:flex-row md:grid grid-cols-4 gap-4 scale-[50%] xl:scale-[80%] justify-between gap-x-5 content-center items-center'>
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
      </div>
    </div>

    <div className='flex justify-center content-center items-center mt-7'>
    <object type="image/svg+xml" className="w-1 h-[280px]" data="/images/Line_Movement.svg">svg-animation</object>
        
    </div>
    <div className='tagline flex flex-col text-center w-[288px] lg:w-[705px] mx-auto justify-center content-center items-center my-9 lg:my-28'>
       
        <span className="text-[#737380] text-sm lg:text-xl">Your enterprise wants a smarter product that converts?</span>
        <h2 className="font-bold text-3xl lg:text-[92px] lg:leading-[119px] text-[#C2C2CC] ">smuv can help<span>.</span> </h2>
        
    </div>

    <div className="px-2  xl:px-9 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[17px]  2xl:gap-3">
          <div className="card">
            <object type="image/svg+xml" className="card-icon" data="/images/icons/Strategy_Icon.svg">svg-animation</object>
            <h3 className="card-heading">Strategy</h3>
            <ul className='card-list'>
              <li>Discovery chat</li>
              <li>User Research and Insight</li>
              <li>Stakeholder Workshops</li>
            </ul>
          </div>
          <div className="card">
            <object type="image/svg+xml" className="card-icon" data="/images/icons/Experience_Icon.svg">svg-animation</object>
            <h3 className="card-heading">Experience</h3>
            <ul className='card-list'>
              <li>User flow chat</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability testing</li>
            </ul>
          </div>
          <div className="card">
            <object type="image/svg+xml" className="card-icon" data="/images/icons/Design_Icon.svg">svg-animation</object>
            <h3 className="card-heading">Design</h3>
            <ul className='card-list'>
              <li>Brand-conscious UI Design</li>
              <li>Brand identity design</li>
              <li>Interaction design</li>
              <li>Front-end development</li>
            </ul>
          </div>
          
        </div>
    </div>
    </Layout >
  )
}
