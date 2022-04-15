import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Services from '../components/Services'
import AnimatedLine from '../components/AnimatedLine';
import Projects from '../components/Projects';


export default function Home({ projects }) {

  return (
    <Layout title={"UI/UX and Frontend company."}>

      <Hero />
      <Clients />
      <AnimatedLine />
      <Services />
      <Projects projects={projects} />

      <div className='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto mt-10 lg:my-20 my-10 lg:mt-20'>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <span className="text-[#737380] text-sm lg:text-xl">That{"’"}s not all we have</span>
            <a className='flex' target="_blank" rel="noreferrer" href="https://medium.com/@smuvstudio">
              <h2 className="font-bold text-3xl lg:text-[46px] lg:leading-[47px] text-[#C2C2CC] my-2 flex items-center">
                <span>Find more in our portfolio</span>
                <svg width="91" height="61" viewBox="0 0 91 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29 29.5H27.5V32.5H29V29.5ZM70.0607 32.0607C70.6464 31.4749 70.6464 30.5251 70.0607 29.9393L60.5147 20.3934C59.9289 19.8076 58.9792 19.8076 58.3934 20.3934C57.8076 20.9792 57.8076 21.9289 58.3934 22.5147L66.8787 31L58.3934 39.4853C57.8076 40.0711 57.8076 41.0208 58.3934 41.6066C58.9792 42.1924 59.9289 42.1924 60.5147 41.6066L70.0607 32.0607ZM29 32.5H69V29.5H29V32.5Z" fill="#C2C2CC" />
                </svg>

              </h2>
            </a>
          </div>
          <div>
            <a className='text-[16px] lg:text-[18px] py-3 px-6 leading-5 lg:py-4 lg:px-12 text-[#737380] border border-[#737380] rounded-lg hover:bg-[#C2C2CC] hover:text-[#0A0A0D] transition-all hover:transition-all btn-transition font-semibold' target="_blank" rel="noreferrer" href="https://medium.com/@smuvstudio">
              More Cases
            </a>
          </div>
        </div>


      </div>
    </Layout >
  )
}
export const getServerSideProps = async () => {

  const res = await fetch('https://api.studio.smuvcreative.com/wp-json/wp/v2/project')
  const json = await res.json()

  return {
    props: {
      projects: json

    }
  }
}