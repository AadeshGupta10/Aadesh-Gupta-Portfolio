import Section_heading from "./Section_heading"
import { skillset } from "@/constant"

const Skills = () => {

    return (
        <div className="lg:py-2">
            {/* Heading */}
            <Section_heading heading="skills" />

            {/* Cards */}
            <SkillCards />

        </div>
    )
}

export default Skills

const SkillCards = () => {
    return (
        skillset.map((set) =>
            <div className="mt-12 flex flex-col justify-center gap-5" key={set.title}>

                <div className="text-xl tracking-wider font-normal">
                    {set.title}
                </div>

                <div className="mt-2 flex flex-wrap justify-center items-center md:justify-start gap-5">
                    {
                        (set.data).map((skill) =>
                            <div className="w-full md:w-fit px-3 py-2 pr-6 flex items-center gap-3 bg-[#e4e2f3] dark:bg-[#0f0f13] rounded-md" key={skill.label}>

                                {
                                    skill.image && (typeof skill.image !== 'string' ?
                                        <div className="size-12 p-2 shrink-0 bg-slate-100 object-contain object-center rounded-lg">
                                            {
                                                skill.image
                                            }
                                        </div>
                                        :

                                        <img
                                            src={skill.image}
                                            alt={skill.label}
                                            className="size-12 p-2 shrink-0 bg-[#f1f5f9] object-contain object-center rounded-lg" />
                                    )
                                }

                                {/* Data */}
                                <div className="flex flex-col justify-center font-semibold">
                                    <p className="tracking-wider">
                                        {skill.label}
                                    </p>
                                    {
                                        skill.type &&
                                        <p className="text-muted-foreground text-[13px] leading-tight hidden lg:block">
                                            {skill.type}
                                        </p>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    )
}