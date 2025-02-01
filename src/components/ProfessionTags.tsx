import { tags } from '@/constant';
import { TypeAnimation } from 'react-type-animation'

const ProfessionTags = () => {

    const pauseDuration = 2000;

    const sequence = tags.flatMap((tag) => [tag, pauseDuration])

    return (
        <TypeAnimation
            sequence={sequence}
            speed={1}
            repeat={Infinity}
            cursor={true}
        />
    )
}

export default ProfessionTags