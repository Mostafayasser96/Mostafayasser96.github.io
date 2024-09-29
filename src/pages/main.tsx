import React from "react";
import Header from "../components/header/header";
import Services from "../components/services/services";
import PreviousWork from "../components/previous-work/previous-work";
import Clients from "../components/clients/clients";
import Comments from "../components/comments/comments";
import Register from "../components/registeration/register";
import Footer from "../components/footer/footer";



const Main = () => {
    return (
        <div className="main">
            <Header />
            <Services />
            <PreviousWork />
            <Clients />
            <Comments />
            <Register />
            <Footer />
        </div>
    )
}
export default Main;