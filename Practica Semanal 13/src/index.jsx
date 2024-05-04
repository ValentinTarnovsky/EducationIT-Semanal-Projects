import "bootstrap/dist/css/bootstrap.min.css";
// La siguiente línea de código, importa la biblioteca principal de React.
// Esto permite el uso de las características y funcionalidades de React.
import React from "react";

// La siguiente línea de código, importa una biblioteca que proporciona métodos
// específicos para interactuar con el DOM cuando estás utilizando React.
import ReactDOM from "react-dom/client";

// La siguiente línea de código, importa el componente principal de la app.
import App from "./App";

// Esta es una función proporcionada por React que se utiliza para crear un
// contenedor de raíz de una aplicación.
ReactDOM.createRoot(document.getElementById("root")).render(
    // El siguiente, es un componente que te permite encontrar errores comunes
    // en los componentes al comienzo del desarrollo.
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);