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
const Criar = lazy(() => import("./pages/Criar/index"));
const Revisar = lazy(() => import("./pages/Revisar/index"));
const Analisar = lazy(() => import("./pages/Analisar/index"));

export default function Router(  ) {
    return (
        <Suspense fallback={<Carregando />}>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/criar" element={<Criar />} />
                    <Route path="/revisar" element={<Revisar />} />
                    <Route path="/analisar" element={<Analisar />} />
                </Route>
            </Routes>
        </Suspense>
    )
}