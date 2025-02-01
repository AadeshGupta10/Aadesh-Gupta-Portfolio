import { qualifications } from "@/constant"
import Timeline from "./Timeline"
import Section_heading from "./Section_heading"

const Qualification = () => {

    return (
        <div className="lg:py-2">
            {/* Heading */}
            <Section_heading heading="qualification" />

            {/* Timeline of Data */}
            <Timeline data={qualifications} />
        </div>
    )
}

export default Qualification