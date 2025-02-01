import { experiences } from "@/constant"
import Section_heading from "./Section_heading"
import Timeline from "./Timeline"

const Experience = () => {
    return (
        <div className="lg:py-2">
            {/* Heading */}
            <Section_heading heading="experience" />

            {/* Timeline of Data */}
            <Timeline data={experiences} />
        </div>
    )
}

export default Experience