import { useTheme } from "@/context/Theme_provider";
import { Sun, Moon } from "lucide-react";

const Theme_toggler = () => {

    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex justify-center items-center cursor-pointer transition-transform duration-500
                          ${isDark ? "rotate-180" : "rotate-0"}`}>
            {
                isDark ?
                    <Sun className="size-5 text-yellow-600 rotate-0 transition-all" />
                    :
                    <Moon className="size-5 text-blue-600 rotate-0 transition-all" />
            }
        </div>
    )
}

export default Theme_toggler