import React from "react";
import './app.css';
import NavBar from "./Components/NavBar";
import RoutePaths from "./Routes/RoutePaths";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <NavBar />
            <RoutePaths />
            <Footer />
        </>
    )
}

export default App;