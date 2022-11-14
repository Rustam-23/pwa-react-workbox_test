import React from "react";
import {Home} from "./pages/Home";
import './styles/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {TopPicks} from "./pages/TopPicks";

export default function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route index element={<Home />} />
                <Route path="/top-picks" element={<TopPicks />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}