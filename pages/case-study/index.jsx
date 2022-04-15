import Image from "next/image";
import Layout from "../../components/layout";

export default function CaseStudy() {
    return (
        <Layout>
            <div className="relative mt-100 xl:mt-[120px]  2xl:mt-[200px] md:max-w-screen-lg xl:max-w-screen-2xl mx-auto  ">
                <div className="lg:p-10 ">
                    <div className="text-center py-5 lg:p-10">
                        <h1 className="no-case-study-heading text-[26px] text-primary px-1 md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-center self-center leading-[34px] lg:leading-[96px]">
                            Coming Soon
                        </h1>
                        <p className="text-[16px] lg:text-[20px] leading-5 lg:leading-10 text-primary">
                            We are still working on the case study for this project, please check back later.
                        </p>
                    </div>
                    <div className="flex justify-center justify-items-center content-center">
                        <Image src="/images/soon.webp" width={564} height={387} alt="No case Study"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}