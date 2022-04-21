import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react';

import Parser from 'rss-parser';
let parser = new Parser();



const Projects = ({ projects }) => {
    const [stories, setStories] = useState([]);
    // console.log(projects);
  
    // console.log(stories);
    useEffect(()=>{
        const root = document.querySelector(':root')

const applyCursorPos = ({clientX, clientY}) => {
    const x = `${clientX - 25}px`
    const y = `${clientY - 25}px`

    root.style.setProperty("--posX", x);
    root.style.setProperty("--posY", y);
}

document.body.addEventListener("mousemove", applyCursorPos)
    })

    return (
        <div id="works" className=" mt-100">
            <div className='px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto md:mb-10 md:mt-24 lg:mb-20 lg:mt-40'>

                <div className="flex flex-col md:flex-row justify-between gap-x-[100px]">
                    <h3 className="font-bold text-3xl lg:text-[46px] lg:leading-[47px] text-[#C2C2CC] my-3  lg:w-[55%]">
                        You{"’"}ve Reached the <br className="hidden lg:block" /> Design Zone.
                    </h3>

                    <span className=" text-[14px] lg:text-[22px] lg:leading-[47px] text-[#737380] my-2 lg:my-0 lg:place-self-start lg:text-right lg:w-[45%]">
                        A little scope of what we’ve done.
                    </span>
                </div>


            </div>

            <div className="px-[16px] md:px-5  xl:px-11 max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1409px] mx-auto my-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[25px] lg:gap-y-10  gap-4 gap-x-4">


                    {
                        projects && projects.map((project) => {
                           if(project.link ===""){
                            return(
                                <div className="project " key={project.id}>
                                   <div className="project overflow-hidden coming-soon ">
                                            {/* <div className="shade"> */}
    
                                            <Image className="project-image object-cover    " src={project.featured_image.guid} priority  width={689} height={521} alt="Blog post" />
                                            {/* </div> */}
                                            <div className="project-meta ">
                                                <h4 className="project-heading">{project.title.rendered}</h4>
                                                <span className="text-base lg:text-xl text-[#45454D] rounded-full max-w-[158px] ">Coming Soon</span>
                                            </div>
                                        </div>
                                </div>
                            )
                           }else{
                            return(
                                <div className="project" key={project.id}>
                                        <a href={project.link} className="project overflow-hidden">
                                            <div className="shade">
    
                                            <Image className="project-image object-cover" src={project.featured_image.guid} priority  width={689} height={521} alt="Blog post" />
                                            </div>
                                            <div className="project-meta">
                                                <h4 className="project-heading">{project.title.rendered}</h4>
                                                <p className="text-[16px]">{project.tags}</p>
                                            </div>
                                        </a>
                                </div>
                            )
                           }
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Projects;
