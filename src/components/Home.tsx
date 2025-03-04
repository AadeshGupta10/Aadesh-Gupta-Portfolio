import { Button, Tooltip } from "@mui/material"
import { Github, Linkedin } from "lucide-react"
import ProfessionTags from "./ProfessionTags";

const Home = () => {

    const showImage = false;

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:pt-20 lg:pb-5 lg:px-4">
            {/* Name, Roles and About */}
            <div className={`flex flex-col ${!showImage && 'items-center'} gap-5`}>
                <p className={`open-sans text-5xl tracking-wide leading-tight font-thin py-5 text-center`}>
                    Hi, I'm <span className="font-normal"><br className="md:hidden" />Aadesh Gupta</span>
                </p>

                <p className={`w-fit min-h-10 text-[1.7rem] text-center font-normal tracking-wide bg-gradient-to-r from-[#B06AB3] to-[#4568DC] bg-clip-text text-transparent open-sans`}>
                    <ProfessionTags />
                </p>

                <p className={`${!showImage && 'lg:w-1/2 text-center'} font-normal open-sans leading-6`}>
                    I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like <span className="font-semibold">React.js</span> and <span className="font-semibold">Next.js</span> as well as back-end technologies like <span className="font-semibold">Node.js</span>, <span className="font-semibold">MySQL</span> and <span className="font-semibold">MongoDB</span>. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mt-4">
                    <Button variant="outlined" href="/resumes/Aadesh_Gupta_Resume.pdf" download={"Aadesh Gupta Resume"}>
                        <div className="h-6 w-[160px] overflow-hidden group">
                            <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-6">
                                <span className="text-center">Hire Me</span>
                                <span className="text-center">Download Resume</span>
                            </div>
                        </div>
                    </Button>

                    <div className="flex items-center gap-6">
                        {/* Github */}
                        <Tooltip title={"Github"} placement="bottom" className="cursor-pointer">
                            <a href="https://aadesh-trimrr.vercel.app/c9pkm6" target="_blank">
                                <Github />
                            </a>
                        </Tooltip>

                        {/* LinkedIn */}
                        <Tooltip title={"LinkedIn"} placement="bottom" className="cursor-pointer">
                            <a href="https://aadesh-trimrr.vercel.app/aadesh-gupta-dev-linkedin" target="_blank">
                                <Linkedin />
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>

            {/* Interactive modal */}
            {
                showImage &&
                <img
                    src="aadesh_gupta.png"
                    alt="Aadesh Gupta"
                    className="h-72 rounded-lg object-contain"
                />
            }
        </div>
    )
}

export default Home