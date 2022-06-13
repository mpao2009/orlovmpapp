//traigo la libreria de React (no guardar carpeta de APP en Onedrive ni en Icloud Drive)
import React from 'react';
//Traigo la libreria de ReactDom
import ReactDOM from 'react-dom/client';
import App from "./App"

import "./estilos.css"

//Mostrar la App en el Dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
 
