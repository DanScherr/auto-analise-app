import { Outlet } from "react-router-dom";
import { LayoutMainMount } from "./LayoutMainMount";

export default function LayoutRoot(  ) {
    return (
        <div className="container">
            <LayoutMainMount.Header />
            <Outlet />
            <div className="fixed-bottom">
                <LayoutMainMount.Footer />
            </div>
        </div>
        
    )
}