import { useEffect } from 'react';

export default function Contact({data}){

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

    return(
        <div className="text-white w-full">
            <h1 className="text-center text-4xl">Contact us</h1>
        </div>
    )
}

export const getServerSideProps = async () => {

    const res = await fetch('https://api.studio.smuvcreative.com/wp-json/wp/v2/pricing')
    const json = await res.json()

    return {
        props: {
            data: json[0]
            
        }
    }
}