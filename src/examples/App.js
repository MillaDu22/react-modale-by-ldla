import React, { useState } from "react";
import { Modale } from "../lib";
import "./App.css";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
        setIsOpen(true);
    };
    
    return (
        <div className="app">
        <h1 className = "title-app">ldlamti-modale</h1>
        <button className = "button-app" onClick={handleOpenModal}>Open Modal</button>
        <Modale 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)} 
            title="Title &#10004;"
            content={<p>Content of the modal.</p>}
        />
        </div>
    )
};

export default App;
