import { useEffect } from 'react';
import Layout from '../components/layout'


export default function Contact({ data }) {

    /*  useEffect(()=>{
         const dataf = async () => {
             // console.log(await data);
             console.log('====================================');
             console.log(data);
             console.log('====================================');
         }
         dataf();
     },[data]) */
    console.log(data);

    return (
        <Layout>
            <div className="relative mt-100 xl:mt-[120px]  2xl:mt-[200px] md:max-w-screen-lg xl:max-w-screen-2xl mx-auto  ">
                <div className="py-10 px-5  lg:p-10 ">
                    <div className=" lg:p-10 flex flex-col lg:flex-row justify-between w-full">
                        <h1 className="no-case-study-heading text-[26px] text-primary px-1 md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold self-center leading-[36px] lg:leading-[96px]">
                            Get started with smuv today.
                        </h1>
                        <p className="text-[14px] lg:text-[20px] leading-5 text-primary mt-3">
                            Our mission is simple: Work with the best, design with a purpose, and engineer for a sustainable future.
                        </p>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async () => {

    const res = await fetch('https://api.studio.smuvcreative.com/wp-json/wp/v2/pricing')
    const json = await res.json()

    return {
        props: {
            data: json

        }
    }
}