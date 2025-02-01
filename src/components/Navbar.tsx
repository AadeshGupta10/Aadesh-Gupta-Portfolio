import { useEffect, useState } from "react";
import Logo from "./Logo"
import Theme_toggler from "./Theme_toggler"
import { Menu, X } from "lucide-react";
import { components } from "@/constant";

interface NavbarProp {
    currentSectionIndex: (e: number) => void,
    initalIndex: number //By Default 1 - Indicating the Home Page
}

const Navbar = ({ currentSectionIndex, initalIndex }: NavbarProp) => {

    const [menu, setMenu] = useState<boolean>(false);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    const url = new URLSearchParams(window.location.search);
    const params = !Number.isNaN(Number(url.get('id'))) ? Number(url.get('id')) : initalIndex;

    const [currentIndex, setCurrentIndex] = useState<number>();

    useEffect(() => {
        currentSectionIndex(
            params ?
                (params >= initalIndex && params <= components.length) ?
                    params
                    : initalIndex
                : initalIndex
        );

        url.delete('id');
        window.history.replaceState(null, "", `${window.location.pathname}`);
    }, [])

    useEffect(() => {
        setCurrentIndex(
            params ?
                (params >= initalIndex && params <= components.length) ?
                    params
                    : initalIndex
                : initalIndex
        );
    }, [initalIndex])

    const MenuItem = () => {
        return (
            <nav
                className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-7 xl:gap-14 m-0 p-0 text-muted-foreground list-none">
                {
                    components.map((item, index) =>
                        <li
                            id={item.label.toLowerCase()}
                            className={`${currentIndex === index + 1 && "dark:text-white text-black font-medium"} cursor-pointer`}
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index + 1);
                                currentSectionIndex(index + 1);
                            }
                            }>
                            {
                                item.label
                            }
                        </li>
                    )
                }
            </nav >
        )
    }

    // const navigate = useNavigate();

    // const [counter, setCounter] = useState(1);

    // const increaseCounter = (clicks: number) => {
    //     if (clicks == 10) {
    //         navigate("/secure/admin");
    //         setCounter(1)
    //     }
    //     else {
    //         setCounter(counter + 1)
    //     }
    // }

    return (
        <div className="py-4 sticky top-0 z-50">
            <div className={`w-full flex flex-wrap justify-between lg:items-center min-h-12 py-3 px-5 rounded-lg backdrop-blur bg-background/25 dark:bg-background/50 supports-[backdrop-filter]:bg-background/25 dark:supports-[backdrop-filter]:bg-background/50 overflow-y-auto select-none`}>
                <div
                // onClick={() => increaseCounter(counter)}
                >
                    <Logo />
                </div>

                {/* Large Screen Menu */}
                <div className="hidden xl:block">
                    <MenuItem />
                </div>

                <div className="flex items-center gap-5">
                    <Theme_toggler />

                    {/* Menu and Close Icon */}
                    <button
                        className="flex flex-col justify-end xl:hidden"
                        onClick={toggleNavbar}>
                        {menu ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Small and Medium Screen Menu */}
                {
                    menu && <div className="w-full xl:hidden my-7">
                        <MenuItem />
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar