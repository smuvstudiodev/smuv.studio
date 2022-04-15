import Image from 'next/image';
import Link from 'next/link'



const Projects = ({ projects }) => {
    console.log(projects);

    return (
        <div id="works">
            <div className='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10 md:mb-10 md:mt-24 lg:mb-20 lg:mt-40'>

                <div className="flex flex-col md:flex-row justify-between gap-x-[100px]">
                    <h2 className="font-bold text-3xl lg:text-[46px] lg:leading-[47px] text-[#C2C2CC] my-2 w-[55%]">
                        You{"’"}ve Reached the <br className="hidden lg:block"/> Design Zone.
                    </h2>

                    <span className=" text-[14px] lg:text-[22px] lg:leading-[47px] text-[#737380] my-2  place-self-center text-right w-[45%]">
                        A little scope of what we’ve done.
                    </span>
                </div>


            </div>

            <div className="px-5 md:px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[17px] lg:gap-y-20  gap-4 gap-x-9">
                    {/* <div className="project">
                        <Image className="project-image" src="/images/blog-images/unsplash_1_CMoFsPfso.png" width={689} height={521} alt="Blog post" />
                        <div className="project-meta">
                            <h4 className="project-heading">Project Title</h4>
                            <p>Project Title</p>
                        </div>
                    </div> */}
                    {
                        projects && projects.map((project) => (
                            <div className="project" key={project.id}>
                                <Link href="/case-study">
                                    <a>
                                        <Image className="project-image" src={project.featured_image.guid} layout="responsive" width={689} height={521} alt="Blog post" />
                                        <div className="project-meta">
                                            <h4 className="project-heading">{project.title.rendered}</h4>
                                            <p>Tag: {project.tags}</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))
                    }

                    {/* <div className="project">
                        <Image className="project-image" src="/images/blog-images/unsplash_lTb4gJK_l1Q.png" width={689} height={521} alt="Blog post" />
                        <div className="project-meta">
                            <h4 className="project-heading">Project Title</h4>
                            <p>Project Title</p>
                        </div>
                    </div> */}

                    {/* <div className="project">
                        <Image className="project-image" src="/images/blog-images/unsplash_xsGxhtAsfSA.png" width={689} height={521} alt="Blog post" />
                        <div className="project-meta">
                            <h4 className="project-heading">Project Title</h4>
                            <p>Project Title</p>
                        </div>
                    </div> */}

                    {/* <div className="project">
                        <Image className="project-image" src="/images/blog-images/unsplash_fIq0tET6llw.png" width={689} height={521} alt="Blog post" />
                        <div className="project-meta">
                            <h4 className="project-heading">Project Title</h4>
                            <p>Project Title</p>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Projects;
