import Image from "next/image";

const Clients = ()=>{
    return (
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
    )
}
export default Clients