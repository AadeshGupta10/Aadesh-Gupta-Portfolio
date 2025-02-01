import App from "@/App";
import { Route } from "react-router";

const routing =
    <Route path="/">
        <Route path="" element={<App />} />
        {/* <Route path="secure/admin/" element={<Admin_Protection />} /> */}
        <Route path="*" element={<>404 Page Not Found</>} />
    </Route>

export default routing;