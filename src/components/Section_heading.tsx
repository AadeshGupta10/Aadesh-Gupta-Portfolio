interface SectionHeadingProp {
    heading: string
}

const Section_heading = ({ heading }: SectionHeadingProp) => {
    return (
        <div className="tracking-widest font-normal text-center text-3xl mb-10 capitalize open-sans">
            {heading}
        </div>
    )
}

export default Section_heading