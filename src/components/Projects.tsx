import { Github } from "lucide-react"
import Section_heading from "./Section_heading"
import { projects } from "@/constant"

const Projects = () => {

    return (
        <div className="lg:py-2">
            {/* Heading */}
            <Section_heading heading="projects" />

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-12">
                {
                    projects.map((project, index) =>
                        <div className="w-80 p-3 rounded-md flex flex-col gap-3 bg-foreground/10" key={index}>

                            <img
                                src={project.image}
                                alt={project.label}
                                loading="lazy"
                                className="w-80 object-cover object-top rounded-sm" />

                            <div className="flex flex-col justify-between h-full gap-4">
                                <div className="flex flex-col gap-1">
                                    {/* Project Name */}
                                    <p className="text-sm md:text-lg tracking-wider font-bold">
                                        {
                                            project.label
                                        }
                                    </p>

                                    {/* Description */}
                                    <div className="font-normal text-sm md:text-md dark:text-gray-300 line-clamp-6 dark:font-normal">
                                        {
                                            project.description
                                        }
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-[14px]">
                                    {/* Live Link */}
                                    <div className="flex gap-2 items-center">
                                        <div className="size-2 bg-green-700 rounded-full animate-pulse duration-1000" />
                                        <a href={project.live_link} className="font-medium">
                                            Live Preview
                                        </a>
                                    </div>

                                    {/* Github Repo of Project */}
                                    <div className="flex gap-2 items-center">
                                        <Github size={18} />
                                        <a href={project.github_link} className="font-medium">
                                            Github Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Projects