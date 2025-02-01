import { useSelector } from "react-redux"
import Admin_Verification from "./Admin_Verification"
import Admin_Dashboard from "./Admin_Dashboard"

const Admin_Protection = () => {

    const admin_authenticated = useSelector((state: any) => state.admin_authenticated)

    return (
        admin_authenticated ?
            <Admin_Dashboard />
            :
            <Admin_Verification />
    )
}

export default Admin_Protection