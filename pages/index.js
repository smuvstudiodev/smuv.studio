import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout title={"UI/UX and Frontend company."}>
      
      <div className="relative mt-100 flex justify-center justify-items-center content-center h-[927px] max-w-screen-xl mx-auto">
      <object className='absolute left-100 right-100 bottom-100 ' type="image/svg+xml" data="/images/Hero_Element.svg">svg-animation</object>
        <div className='absolute top-44  bottom-100'>
          <h1 className='text-primary md:text-6xl lg:text-8xl font-bold text-center self-center'>
            A word-class UX-UI studio that love to create 
            <span>
              
            </span>
          </h1>
        </div>

      </div>
    </Layout>
  )
}
