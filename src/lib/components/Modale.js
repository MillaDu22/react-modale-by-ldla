import React from 'react';
import "./Modale.css";

const Modale = ({isOpen, onClose, title, content}) => {

    const handleClose = () => {
        onClose();
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleClose();                     
        }
    };

    return (
        <div
            className="ldla-react-modal"
            role="dialog"
            aria-modal="true"
            tabIndex={0}
            style={{
                display: isOpen ? "block" : "none"
            }}
        >
            <div className="ldla-react-modal-content">
                <div className="ldla-react-modal-head">
                    <h2 className="ldla-react-modal-title">{title}</h2>
                    <span
                        className="ldla-react-modal-button-close"
                        onClick={handleClose}
                        onKeyDown={handleKeyDown}
                        role="button"
                        aria-label="Close modal"
                        tabIndex={1}
                    >
                        &times;
                    </span>
                </div>
                <div className="ldla-react-modal-body">
                    <div className = "ldla-react-modal-txt">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default Modale;
