import { useTheme } from "@/context/Theme_provider";

const Logo = () => {

    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <img
            src={isDark ? "aadesh_gupta_DarkLogo.png" : "aadesh_gupta_LightLogo.png"}
            alt="Aadesh Gupta"
            className="h-5 object-contain"
        />
    )
}

export default Logo