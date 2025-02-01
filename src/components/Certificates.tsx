import { certificates } from "@/constant"
import Section_heading from "./Section_heading"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from "@mui/material/Button";

const Certificates = () => {
    return (
        <div className="lg:py-2 -z-50!">
            {/* Heading */}
            <Section_heading heading="certificates" />
            <Cards />
        </div>
    )
}

export default Certificates

export const Cards = () => {

    const options = {
        items: 3, // Default number of items
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,
                margin: 15
            },
            600: {
                items: 2,
                stagePadding: 15,
                margin: 15
            },
            1000: {
                items: 3,
                stagePadding: 30,
                margin: 30
            },
        }
    }

    return (
        <>
            <div className="hidden lg:flex flex-wrap justify-center items-center gap-12">
                <Certificate_Cards />
            </div>

            <div className="lg:hidden">
                <OwlCarousel {...options} className='!z-0 !relative owl-theme my-1'
                    loop
                    dotsEach={true}
                    dotsSpeed={500}
                    autoplay={true}
                    autoplaySpeed={1000}
                    autoplayTimeout={4000}
                    mergeFit={true}>
                    <Certificate_Cards />
                </OwlCarousel>
            </div>
        </>
    )
}

export const Certificate_Cards = () => {

    const handleFileDownload = (fileUrl: string, desiredFileName: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = desiredFileName;

        // Simulate a click on the link to trigger the download
        link.click();
    }

    return (
        certificates.map((certificate, index) =>
            <div className="flex flex-col gap-3 w-fit" key={index}>
                <div className="h-64 lg:w-72 lg:h-52 overflow-hidden rounded-lg shadow-md">
                    <img src={certificate.image}
                        alt={certificate.name}
                        loading="lazy"
                        className="size-full object-contain object-bottom rounded-md"
                    />
                </div>
                <Button
                    variant="outlined"
                    onClick={() => handleFileDownload(certificate.image, certificate.name)}>
                    Download Certificate
                </Button>
            </div>
        )
    )
}