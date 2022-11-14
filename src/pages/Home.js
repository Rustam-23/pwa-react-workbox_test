import React from "react";
import {Layout} from "../components/layout";
import {Movies} from "../components/movies/Movies";

export const Home = () => {
    
    return (
        <Layout>
            <h2>HomePage</h2>
            <Movies />
        </Layout>
    )
}