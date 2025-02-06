import { certificates } from "@/constant"
import Section_heading from "./Section_heading"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from "@mui/material/Button";
import { useState } from "react";
import { Modal } from "@mui/material";

const Certificates = () => {
    return (
        <div className="lg:py-2">
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
                <OwlCarousel {...options} className='owl-theme my-1'
                    loop={true}
                    nav={true}
                    lazyLoad={true}
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

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [certificateIndex, setCertificateIndex] = useState<number>(0)

    return (
        <>
            {certificates.map((certificate, index) =>
                <div className="flex flex-1 md:flex-none flex-col gap-3" key={index}>
                    <div className="h-64 lg:w-72 lg:h-52 overflow-hidden rounded-lg shadow-md"
                        onClick={() => {
                            setCertificateIndex(index);
                            setIsModalOpen(true);
                        }}>
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
            )}

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="flex justify-center items-center"
            >
                <img src={certificates[certificateIndex].image} alt=""
                    className="max-h-96 object-contain"
                />
            </Modal>
        </>
    )
}