/* eslint-disable no-unused-vars */
import "./app.scss";

import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";
import Aside from "./components/layout/aside/Aside";
import NotesContext from "./components/contexts/DataContext";
import { useState, useEffect } from "react";

const App = () => {
    const [ notas, setNotas ] = useState([
        {
            titulo: "Hola, soy una nota!",
            contenido: `Hey, Esta es una nota!
            😁 Puedes crear todas las notas que quieras!
            ✍🏾 Ademas de editarlas!
            ⭐ Ponerlas como favoritas!
            ❌ Tambien eliminarlas!

            App de notas por Valentin Tarnovsky!`,
            id: 0,
            fav: true,
        },
    ]);
    const [ iden, setIden ] = useState(1);
    const [ showNote, setShowNote ] = useState({});
    const [ editando, setEditando ] = useState(false);
    const [ mostrandoFav, setMostrandoFav ] = useState(false);

    useEffect(() => {
        const notasGuardadas = localStorage.getItem("notas");
        if (notasGuardadas) {
            setNotas(JSON.parse(notasGuardadas));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notas", JSON.stringify(notas));
    }, [notas]);

    return (
        <>
            <Header />
            <NotesContext.Provider value={{ notas, setNotas, iden, setIden, showNote, setShowNote, editando, setEditando, mostrandoFav, setMostrandoFav }}>
                <Aside />
                <Main />
            </NotesContext.Provider>
            <Footer />
        </>
    );
};

export default App;