import React from "react";
import Brannigan from "../images/Brannigan.jpg";
import Nav from "./navigation.js";


function header({currentPage, pageChange}) {
    return(<header>
        <h1>Zaleski</h1>
        <img src={ Brannigan } className="float-left" alt="Placeholder avatar img" id="branImg"/>
        <Nav />
    </header>)
}



export default header;