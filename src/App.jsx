import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("nightMode") === "true";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("night-mode");
        } else {
            document.body.classList.remove("night-mode");
        }
        localStorage.setItem("nightMode", isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <BrowserRouter>
            <div className="app">
                <Header
                    isDarkMode={isDarkMode}
                    onToggleDarkMode={toggleDarkMode}
                />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
