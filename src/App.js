import React, { useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <NavBar />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
