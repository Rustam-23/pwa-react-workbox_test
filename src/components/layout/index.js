import React from "react";
import {Header} from "./header";
import {Hero} from "./hero";

export const Layout = ({children}) => {

    return (
        <div>
            <Header />
            <Hero />
            <div id="content-box" className="max-w-screen-xl m-auto mt-12">
                {children}
            </div>
        </div>
    )
}