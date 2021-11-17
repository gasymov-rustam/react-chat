import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

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
