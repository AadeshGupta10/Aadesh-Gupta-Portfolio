interface CustomProp {
    data: {
        image: string,
        period: string,
        course_role: string,
        school_university_company: string,
        description?: string,
        grade?: string,
        skills?: string[]
    }[]
}

const Timeline = ({ data }: CustomProp) => {

    return (
        <div className="flex flex-col gap-5 roboto">
            {
                ([...data].reverse()).map((details, index) =>
                    <div className="flex flex-col md:flex-row" key={index}>

                        {/* Time Period */}
                        <div className={`w-full md:w-6/12 lg:w-8/12 md:text-center text-sm tracking-wider font-light dark:font-extralight px-4 pb-2`}>
                            {
                                details.period
                            }
                        </div>

                        {/* Details */}
                        <div className={`w-full px-4 pb-3 tracking-wider flex flex-col gap-2`}>
                            <div>

                                {/* Course/Role */}
                                <div className="font-medium">
                                    {
                                        details.course_role
                                    }
                                </div>

                                {/* School/University/Company */}
                                <div className="font-normal flex gap-1 text-[14.5px] md:text-md">
                                    <span>-</span>
                                    <span>
                                        {
                                            details.school_university_company
                                        }
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            {
                                details.description &&
                                <div className="font-light dark:font-extralight text-sm md:text-md">
                                    {
                                        details.description
                                    }
                                </div>
                            }

                            {/* Grade */}
                            {
                                details.grade &&
                                <div className="font-light text-sm md:text-md">
                                    <span className="font-normal">Grade - </span> {
                                        details.grade
                                    }
                                </div>
                            }

                            {/* Skills */}
                            {
                                details.skills &&
                                <div className="flex flex-wrap gap-3 text-[11px] mt-2">
                                    {
                                        (details.skills).map((skill, index) =>
                                            <div className="bg-foreground/15 px-3 py-1 rounded-sm" key={"skill_" + index}>
                                                {
                                                    skill
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default Timeline