import { useEffect } from 'react';
import Layout from '../components/layout'
import { useRouter } from 'next/router';


export default function Contact() {
    const router = useRouter();

    /*  useEffect(()=>{
         const dataf = async () => {
             // console.log(await data);
             console.log('====================================');
             console.log(data);
             console.log('====================================');
         }
         dataf();
     },[data]) */
    // console.log(data);
    const submitForm = (e) => {
        e.preventDefault();
        alert("We will be taking you to book appointment with us.")

        router.push("https://bit.ly/3jQS9nW")
    }
    return (
        <Layout>
            <div className="relative mt-100 xl:mt-[120px]  2xl:mt-[200px] md:max-w-screen-lg xl:max-w-screen-2xl mx-auto  ">
                <div className="py-10 px-5  lg:p-10 ">
                    <div className=" lg:py-10 flex flex-col place-content-start lg:flex-row justify-between w-full lg:gap-x-9">
                        <h1 className="no-case-study-heading text-2xl text-primary md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-bold self-center  lg:w-[60%]">
                            Get started with smuv today.
                        </h1>
                        <p className="text-sm lg:text-lg 2xl:text-xl leading-5 text-[#737380] mt-3 lg:mt-0 lg:w-[45%] ">
                            Our goal is clear: work with a vision, make it ambitious designs, build the future you dream of.
                        </p>
                    </div>
                    <div className="py-10 lg:px-5  lg:p-10 2xl:px-2 flex flex-col lg:flex-row gap-8 ">
                        <div className="py-10 lg:px-14 px-5 rounded-xl bg-[#101012] lg:w-2/3">
                            <div className="lg:py-10">
                                <h2 className="text-[24px] lg:text-[40px] font-bold text-[#C2C2CC]">Let{"’"}s collaborate</h2>
                            </div>
                            <div className="py-2">
                                <form onSubmit={submitForm}>
                                    <div className="flex flex-col lg:md:flex-row my-4 lg:mb-12 gap-y-4">
                                        <div className='form-group'>
                                            <input required id="first_name" placeholder=' ' className=" input-text " type="text" autoComplete='off' />
                                            <label htmlFor="first_name" className='absolute input-textholder'>First Name</label>
                                        </div>
                                        <div className='form-group'>
                                            <input required id="last_name" placeholder=' ' className=" input-text " type="text" autoComplete="off" />
                                            <label htmlFor="last_name" className='absolute input-textholder'>Last Name</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:md:flex-row my-4 lg:my-8 lg:mb-12 gap-y-4">
                                        <div className='form-group'>
                                            <input required id="email" placeholder=' ' className=" input-text " type="email" autoComplete='off' />
                                            <label htmlFor="email" className='absolute input-textholder'>Email Address</label>
                                        </div>
                                        <div className='form-group'>
                                            <input required id="company" placeholder=' ' className=" input-text " type="text" autoComplete='off' />
                                            <label htmlFor="company" className='absolute input-textholder'>Company Name</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:md:flex-row my-4 lg:my-8 gap-y-4">
                                        <div className='form-group'>
                                            {/* <input id="first_name" placeholder=' ' className=" input-text " type="text" autoComplete='off' /> */}
                                            <select required className="input-text " placeholder='Select a Service'>
                                                {/* <option selected disabled>Select a serivce</option> */}
                                                <option value="" disabled selected hidden>Select a serivce</option>
                                                <option value="ui_ui_design">UI/UX Design</option>
                                                <option value="ui_ux_frontend">UI/UX Design and Frontend</option>
                                            </select>
                                            {/* <label htmlFor="first_name" className='absolute input-textholder'>First Name</label> */}
                                        </div>
                                        <div className='form-group'>
                                            <select className="input-text " disabled>
                                                <option selected>Select a serivce</option>
                                                <option value="sapa">Sapa design</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" my-4 lg:my-8 lg:mb-12">
                                        <div className='lg:px-2 relative'>
                                            <input required id="message" placeholder=' ' className=" input-text " type="text" autoComplete='off' />
                                            <label htmlFor="message" className='absolute input-textholder'>Message </label>
                                        </div>
                                    </div>

 <div className='h-auto lg:translate-y-3 flex w-full justify-end'>
           {/* <Link href="/"> */}

           <button type="submit" className='bg-[#EBEBF7] lg:bg-transparent text-[16px] place-self-end lg:text-[18px] py-3 px-6 leading-5 lg:py-4 lg:px-10 lg:text-[#010103] border lg:border-[#737380] rounded-lg lg:bg-[#C2C2CC] hover:text-[#0A0A0D] transition-all hover:transition-all btn-transition font-semibold' target="_blank" rel="noreferrer" >
              Next
            </button>
            {/* </Link> */}
          </div>
                                </form>
                            </div>
                           
                        </div>
                        <div className="py-14 lg:px-14 px-5 rounded-xl bg-[#101012] lg:w-1/3 lg:max-h-[444px]">
                            <h3 className="text-[20px] lg:text-[32px] font-bold what-next-heading">What{"'"}s next?</h3>
                            <div className="lg:py-10">
                            <p className="contact-p-text">
                               Kindly fill in the required fields below to progress to the next page.
                            </p>
                            <br/>
                            <p className="contact-p-text">
                                Afterwards, you can book a discovery chat with us to discuss the details of your product.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

/* export const getServerSideProps = async () => {

    const res = await fetch('https://api.studio.smuvcreative.com/wp-json/wp/v2/pricing')
    const json = await res.json()

    return {
        props: {
            data: json

        }
    }
} */