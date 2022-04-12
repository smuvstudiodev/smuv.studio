import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout title={"UI/UX and Frontend company."}>

      <div className="relative mt-100 xl:mt-100  2xl:mt-[200px] flex justify-center justify-items-center content-center md:max-w-screen-lg xl:max-w-screen-2xl mx-auto">
        <object className='hidden top-[-10%] md:top-[-15%] xl:top-[-15%] md:block absolute left-[12%] xl:left-[15%] right-100 item-center self-center md:w-[75%] xl:w-[70%]' type="image/svg+xml" data="/images/Hero_Element.svg"></object>
        <div className='relative mt-[82px] md:mt-100 lg:mt-40 xl:mt-44   flex flex-col content-center justify-center'>
          <h1 className='heading-text text-[26px] text-primary px-1 md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-center self-center leading-[34px] lg:leading-[96px]'>
            A word-class UX-UI <br className="hidden md:block" /> studio that loves to create

            <div className="scroller">
              <div>
                <span className="inline-block  ">
                  insane designs.
                </span>
                <span className="inline-block  ">
                  perfect user experience.
                </span>
                <span className="inline-block ">
                  design that converts.
                </span>
                <span className="inline-block ">
                  insane designs.
                </span>
              </div>
            </div>

          </h1>

          <div className='hero-btn-group lg:my-5 mt-10 flex flex-col lg:flex-row justify-between mx-auto gap-y-4 lg:gap-x-5 max-w-sm content-center'>
            <Link href="/contact">
              <a className='hero-btn group'>
                <span>Let{"'"}s Collab</span>
                <svg width="19" height="16" className='hero-btn-arrow-icon group-hover:fill-[#0A0A0D] lg:fill-[#737380] fill-[#0A0A0D] w-[12.31px] h-[10.37px] lg:w-[19px] lg:h-4 ' viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="mt-[200px] ">

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

      <div className='flex justify-center content-center items-center '>
        <object type="image/svg+xml" className="w-1 h-[280px]" data="/images/Line_Movement.svg">svg-animation</object>

      </div>
      <div className='tagline flex flex-col text-center w-[288px] lg:w-[705px] mx-auto justify-center content-center items-center my-9 lg:mb-20 lg:mt-10'>

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

      <div className='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10 md:mb-10 md:mt-24 lg:mb-20 lg:mt-40'>

        <div className="flex flex-col md:flex-row justify-between gap-x-[100px]">
          <h2 className="font-bold text-3xl lg:text-[46px] lg:leading-[47px] text-[#C2C2CC] my-2 w-[55%">
            You{"’"}ve Reached the Design Zone.
          </h2>

          <span className="font-bold text-[14px] lg:text-[24px] lg:leading-[47px] text-[#C2C2CC] my-2  place-self-end text-right w-[45%]">
          A little scope of what we’ve done.
          </span>
        </div>


      </div>

      <div className="px-5 md:px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[17px] lg:gap-y-20  gap-4 gap-x-9">
          <div className="project">
            <Image className="project-image" src="/images/blog-images/unsplash_1_CMoFsPfso.png" width={689} height={521} alt="Blog post" />
            <div className="project-meta">
              <h4 className="project-heading">Project Title</h4>
              <p>Project Title</p>
            </div>
          </div>


          <div className="project">
            <Image className="project-image" src="/images/blog-images/unsplash_lTb4gJK_l1Q.png" width={689} height={521} alt="Blog post" />
            <div className="project-meta">
              <h4 className="project-heading">Project Title</h4>
              <p>Project Title</p>
            </div>
          </div>

          <div className="project">
            <Image className="project-image" src="/images/blog-images/unsplash_xsGxhtAsfSA.png" width={689} height={521} alt="Blog post" />
            <div className="project-meta">
              <h4 className="project-heading">Project Title</h4>
              <p>Project Title</p>
            </div>
          </div>

          <div className="project">
            <Image className="project-image" src="/images/blog-images/unsplash_fIq0tET6llw.png" width={689} height={521} alt="Blog post" />
            <div className="project-meta">
              <h4 className="project-heading">Project Title</h4>
              <p>Project Title</p>
            </div>
          </div>

        </div>
      </div>

      <div className='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10 lg:my-20'>

        <span className="text-[#737380] text-sm lg:text-xl">That{"’"}s not all we have</span>
        <Link href="/">
          <a>
            <h2 className="font-bold text-3xl lg:text-[46px] lg:leading-[47px] text-[#C2C2CC] my-2 flex items-center">
              <span>Find more in our portfolio</span>
              <svg width="91" height="61" viewBox="0 0 91 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 29.5H27.5V32.5H29V29.5ZM70.0607 32.0607C70.6464 31.4749 70.6464 30.5251 70.0607 29.9393L60.5147 20.3934C59.9289 19.8076 58.9792 19.8076 58.3934 20.3934C57.8076 20.9792 57.8076 21.9289 58.3934 22.5147L66.8787 31L58.3934 39.4853C57.8076 40.0711 57.8076 41.0208 58.3934 41.6066C58.9792 42.1924 59.9289 42.1924 60.5147 41.6066L70.0607 32.0607ZM29 32.5H69V29.5H29V32.5Z" fill="#C2C2CC" />
              </svg>

            </h2>
          </a>
        </Link>

      </div>
      <div lassName='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10 lg:my-20'>
        <div className="bg-[#101012] py-20 px-16 ">

        </div>
      </div>
    </Layout >
  )
}
