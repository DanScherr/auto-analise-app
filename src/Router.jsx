/* eslint-disable no-unused-vars */
//@ts-check
import React, { lazy, Suspense } from "react";
import {
    Routes,
    Route
} from "react-router-dom";
/** Components */
import Carregando from "./pages/components/Carregando";

/** Pages */
const Layout = lazy(() => import("./pages/Layout/Index"));
const Home = lazy(() => import("./pages/Home/index"));

export default function Router(  ) {
    return (
        <Suspense fallback={<Carregando />}>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
    )
}