# NAME

react-modale-by-ldla

![Description de l'image](/src/images/Boutonmodale.png)
![Description de l'image](/src/images/Modale.png)

## DESCRIPTION

Simple composant react-modale, responsive et accéssible.


## INSTALLATION

Pour installer ldla-modale dans votre projet, utilisez npm :

npm install react-modale-by-ldla

ou avec yarn :

yarn add react-modale-by-ldla


## UTILISATION

```jsx

DANS VOTRE APPLICATION:

import React, { useState } from 'react';
import { Modale } from 'react-modale-by-ldla';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="app">
      <h1 className = "title-app">ldla-modale</h1>
      <button className="button-app" onClick={handleOpenModal}>Open Modal</button>
      <Modale 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Title &#10004;"
        content={<p>Content of the modal.</p>}
      />
    </div>
  );
}

export default App;

CSS APPLICATION:

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.title-app {
  margin-bottom: 20px;
  text-align: center;
}

.button-app {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bfffc;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-app:hover {
  background-color: #0056b3;
}

LE COMPOSANT MODALE:

import React from 'react';

const Modale = ({ isOpen, onClose, title, content }) => {

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
            tabIndex="-1"
            style={{
                display: isOpen ? 'block' : 'none',
            }}
        >
            <div className="ldla-react-modal-content">
                <div className="ldla-react-modal-head">
                    <h2 className= "ldla-react-modal-title">{title}</h2>
                    <span
                        className="ldla-react-modal-button-close"
                        onClick={handleClose}
                        onKeyDown={handleKeyDown}
                        role="button"
                        aria-label="Close modal"
                        tabIndex="0"
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

CSS COMPOSANT MODALE: 

.ldla-react-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 0, 0.066);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.ldla-react-modal-content {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35vh;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    min-width: 30%;
    max-width: 40%;
    max-height: 80%;
    overflow: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.ldla-react-modal-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.131);
}

.ldla-react-modal-head .ldla-react-modal-title {
    margin: 0;
    color: rgb(47, 255, 106);
}

.ldla-react-modal-button-close {
    cursor: pointer;
    font-size: 20px;
    color: black;
}

.ldla-react-modal-button-close:hover {
    color: #000;
}

.ldla-react-modal-body {
    margin-top: 20px;
}

@media (max-width: 768px) {
    .ldla-react-modal-content {
        width: 80%;
        max-width: none;
    }
}


PROPS:

| Prop      | Description                                     | Type     | Par défaut |
|-----------|-------------------------------------------------|----------|------------|
| isOpen    | Indique si la modal est ouverte ou fermée      | boolean  | false      |
| onClose   | Fonction à appeler pour fermer la modal         | function | -          |
| title     | Titre de la modal                               | string   | -          |
| content   | Contenu de la modal                              | node     | -          |


EXEMPLES:

<Modale 
  isOpen={true} 
  onClose={() => setIsOpen(false)} 
  title="Titre de la modal"
  content={<p>Contenu de la modale.</p>}
/>

STYLES CSS:

Pour personnaliser l'apparence de la modal, vous pouvez ajouter vos propres styles CSS ou modifier les styles par défaut dans votre fichier de feuille de style.

