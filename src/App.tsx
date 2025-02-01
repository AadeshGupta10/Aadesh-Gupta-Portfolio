import { useEffect, useRef, useState } from "react"
import { useTheme } from "./context/Theme_provider"
import { components } from "./constant"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import ProfessionalTags from "./components/ProfessionalTags"

// import Skills from "./components/Skills"
// import Home from "./components/Home"
// import Qualification from "./components/Qualification"
// import Projects from "./components/Projects"
// import Certificates from "./components/Certificates"
// import Testimonials from "./components/Testimonials"
// import Contact from "./components/Contact"
// import Experience from "./components/Experience"

const App = () => {

    const { theme } = useTheme();
    const isDark = theme === "dark";

    const [initialIndex, setInitialIndex] = useState(1); //By Default 1 - Indicating the Home Page

    const sectionRef = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [currentIndex, setCurrentIndex] = useState<number | undefined>(undefined)

    useEffect(() => {
        const offset = 80; // Distance from the top
        const section = currentIndex && sectionRef.current[currentIndex];
        const container = containerRef.current;

        if (section && container) {
            const sectionTop = section.offsetTop; // Top position relative to the container
            container.scrollTo({
                top: sectionTop - offset,
                behavior: "smooth",
            })
        }
    }, [currentIndex])

    // useEffect(() => {
    //     console.log(sectionRef.current[2]?.getBoundingClientRect())
    // }, [])

    useEffect(() => {

        const container = containerRef.current;

        if (!container) {
            console.error("Container not found");
            return;
        }

        const handleScrollViewElement = () => {

            const windowHeight = window.innerHeight;

            for (let i = 1; i < components.length + 1; i++) {
                const element = sectionRef.current[i];
                if (element) {
                    const distanceFromTop = element.getBoundingClientRect().top;
                    const distanceFromBottom = element.getBoundingClientRect().bottom;

                    let BottomViewPercent = (distanceFromBottom / windowHeight) * 100;

                    if ((distanceFromTop >= 0 && distanceFromTop <= 140) || (BottomViewPercent >= 20 && BottomViewPercent <= 75)) {
                        // console.log(components[i - 1].label,BottomViewPercent);
                        setInitialIndex(i);
                        break;
                    }
                }
            }
        };

        // Attach scroll and resize event listeners
        container.addEventListener("scroll", handleScrollViewElement);
        container.addEventListener("resize", handleScrollViewElement);

        // Initial call after render
        handleScrollViewElement();

        return () => {
            // Cleanup listeners
            container.removeEventListener("scroll", handleScrollViewElement);
            container.removeEventListener("resize", handleScrollViewElement);
        };
    }, [])

    return (
        <div className={`h-screen overflow-y-auto
            ${isDark ?
                "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
                :
                "bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.75),rgba(255,255,255,0))]"}
            `}>

            <div className="h-full overflow-y-auto" ref={containerRef} id="sections_container">
                <div className="container mx-auto px-3">
                    {/* <ProfessionalTags /> */}
                    {/* Navbar */}
                    <Navbar
                        currentSectionIndex={(index) => setCurrentIndex(index)}
                        initalIndex={initialIndex} //By Default 1 - Indicating the Home Page
                    />

                    {/* Sections */}

                    {/* <Home /> */}
                    {/* <Skills /> */}
                    {/* <Qualification /> */}
                    {/* <Experience /> */}
                    {/* <Projects /> */}
                    {/* <Certificates /> */}
                    {/* <Testimonials /> */}
                    {/* <Contact /> */}

                    {components.map((item, index) =>
                        <section
                            id={item.label.toLowerCase()}
                            className={`${index + 1 > 1 && "mt-20"}`}
                            key={"component_" + index + 1}
                            ref={(e) => sectionRef.current[index + 1] = e as HTMLDivElement | null}>
                            {
                                item.component
                            }
                        </section>
                    )}

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App