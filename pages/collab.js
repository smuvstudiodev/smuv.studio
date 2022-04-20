import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import { useRouter } from 'next/router';


export default function Contact({ data }) {
    const router = useRouter();
    const [price, setPrice] = useState(null);
    const [priceList, setPriceList] = useState([]);
    const [priceSlug, setPriceSlug] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [service, setService] = useState('0');
    const [budget, setBudget] = useState('0');
    const [message, setMessage] = useState('');

   /*  useEffect(() => {
        // setPricing(priceSlug);
       if(priceSlug !== ''){
        var a = data.find((l)=>l.slug===priceSlug)
        setPrice(a)
        console.log(priceSlug);
        console.log(service);
       }

        return function cleanUp(){
            // setPriceList(data)
        }
    }, [priceSlug,data,service]) */
    // console.log(data);


    const submitForm = async (e) => {
        e.preventDefault();
        
        const data = {
            name: `${firstName} ${lastName}`,
            email:email,
            message:`Email: ${email}\n Company: ${company} \nService: ${service} \nBudget: ${budget} \nMessage: ${message} \n`,
        }

        const mailto = 'hi@smuvcreative.com';
        const MailCode = '5d6a2580ef4bae58fc33fbb7984a57b7';

        const url = `https://formsubmit.co/ajax/${MailCode}`;
        const res = await fetch(url,{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(data)
        })

        if(res.ok) router.push("https://bit.ly/3jQS9nW");
    }
    const setPricing = (value) => {
            setPrice(() => data.find((l)=>l.slug===value))
    }

    return (
        <Layout>
            <div className="relative 2xl:mt-[100px] md:max-w-screen-lg xl:max-w-screen-2xl mx-auto ">
                <div className="py-10 px-5  lg:p-10 ">
                    <div className=" lg:py-10 flex flex-col place-content-start lg:flex-row justify-between w-full lg:gap-x-9">
                        <h1 className="no-case-study-heading text-2xl text-primary md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-bold self-center  lg:w-[60%]">
                            Get started with smuv today.
                        </h1>
                        <p className="text-sm lg:text-lg 2xl:text-xl leading-5 text-[#737380] mt-3 lg:mt-0 lg:w-[45%] ">
                            Our goal is clear: work with a vision, make ambitious designs, build the future you dream of.
                        </p>
                    </div>
                    <div className="py-10 lg:px-5  lg:p-10 2xl:px-2 flex flex-col lg:flex-row gap-8 ">
                        <div className="py-10 lg:px-14 px-5 rounded-xl bg-[#101012] lg:w-2/3">
                            <div className="lg:py-10">
                                <h2 className="text-[24px] lg:text-[40px] font-bold text-[#C2C2CC]">Let{"’"}s collaborate</h2>
                            </div>
                            <div className="py-2">
                                <form onSubmit={submitForm}>
                                    <div className="flex flex-col lg:md:flex-row my-4 lg:mb-7 gap-y-2">
                                        <div className='form-group'>
                                            <input value={firstName}onChange={(e)=>setFirstName(e.target.value)} required id="first_name" placeholder=' ' className=" input-text " type="text" autoComplete='off' />
                                            <label htmlFor="first_name" className='absolute input-textholder'>First Name</label>
                                        </div>
                                        <div className='form-group'>
                                            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} required id="last_name" placeholder=' ' className=" input-text " type="text" autoComplete="off" />
                                            <label htmlFor="last_name" className='absolute input-textholder'>Last Name</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:md:flex-row my-4 lg:my-8 lg:mb-7 gap-y-2">
                                        <div className='form-group'>
                                            <input value={email} onChange={(e)=>setEmail(e.target.value)} required id="email" placeholder=' ' className=" input-text " type="email" autoComplete='off' />
                                            <label htmlFor="email" className='absolute input-textholder'>Email Address</label>
                                        </div>
                                        <div className='form-group'>
                                            <input value={company} onChange={(e)=>setCompany(e.target.value)} required id="company" placeholder=' ' className=" input-text " type="text" autoComplete='off' />
                                            <label htmlFor="company" className='absolute input-textholder'>Company Name</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:md:flex-row my-4 lg:my-6 gap-y-2">
                                        <div className='form-group'>
                                            {/* <input id="first_name" placeholder=' ' className=" input-text " type="text" autoComplete='off' /> */}
                                            <select defaultValue={service}  onChange={(e)=>{
                                                setPricing(e.target.value)
                                                // setPriceSlug(e.target.value)
                                                setService(()=>{
                                                    var a = data.find((l)=>l.slug===e.target.value)
                                                    return a.title.rendered })
                                            }}  required className="input-text select" placeholder='Select a Service'>
                                                {/* <option selected disabled>Select a serivce</option> */}
                                                <option value="0" hidden disabled className="font-normal text-[#7C7C82] reddd">Select a serivce
                                                </option>
                                                {
                                                    data && data.map((p, i) => {
                                                        return (
                                                            <option key={p.id} id={p.id} value={p.slug}>{p.title.rendered}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            {/* <label htmlFor="first_name" className='absolute input-textholder'>First Name</label> */}
                                        </div>
                                        <div className='form-group'>
                                            <select disabled={price==null?true:false} value={budget} onChange={(e)=>setBudget(e.target.value)} className="input-text select"  >
                                                <option hidden disabled value={'0'}>Select a Budget</option>
                                               {
                                                   price !== null &&  <>
                                                   <option value={price.price_range_1}>{price.price_range_1}</option>
                                                    <option value={price.price_range_2}>{price.price_range_2}</option>
                                                    <option value={price.price_range_3}>{price.price_range_3}</option>
                                                   {
                                                    price.price_range_4 !== '' &&   
                                                       <option value={price.price_range_4}>{price.price_range_4}</option>
                                                   }
                                                   
                                                   </> 
                                               }
                                               
                                               
                                                
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" my-4 lg:my-8 lg:mb-12">
                                        <div className='lg:px-2 relative'>
                                            {/* <input  placeholder=' ' className=" input-text " type="text" autoComplete='off' /> */}
                                            <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  placeholder=' ' required id="message" className="py-3 input-text h-20 max-h-100 scroll-none">

                                            </textarea>
                                            {/* <div onChange={(e)=>console.log(e)} className="textarea input-text" role="textbox" autoComplete='off' contentEditable placeholder="">

                                            </div> */}
                                            <span className='absolute input-textholder'>Message </span>
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
                        <div className="py-14 lg:px-14 px-5 rounded-xl bg-[#101012] lg:w-1/3 lg:max-h-[350px] moving_card">
                            <h3 className="text-[20px] lg:text-[32px] font-bold what-next-heading">What{"'"}s next?</h3>
                            <div className="lg:py-10">
                                <p className="contact-p-text">
                                    Kindly fill in the required fields below to progress to the next page.
                                </p>
                                <br />
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

export const getServerSideProps = async () => {

    const res = await fetch('https://api.studio.smuvcreative.com/wp-json/wp/v2/pricing')
    const json = await res.json()

    return {
        props: {
            data: json

        }
    }
}