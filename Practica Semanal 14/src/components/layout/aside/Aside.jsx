import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import NotesContext from "../../contexts/DataContext";

import "./aside.scss";

const Aside = () => {
    const { notas, setNotas, iden, setIden, showNote, setShowNote, editando, setEditando, mostrandoFav, setMostrandoFav } = useContext(NotesContext);
    const [ estado, setEstado ] = useState("Mostrar");
    const [ guardarNotas, setGuardarNotas ] = useState();

    const newNota = function (titulo, contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.id = iden;
        this.fav = false;
    };

    const handleOnClickAddNote = () => {
        if (mostrandoFav) {
            setEstado("Mostrar");
            setMostrandoFav(false);
            const addNote = [ ...guardarNotas, new newNota("Nota sin titulo", "") ];
            setNotas(addNote);
        } else {
            const addNote = [ ...notas, new newNota("Nota sin titulo", "") ];
            setNotas(addNote);
        }
        setIden(iden+1);
    };

    const handleOnClickRemoveNote = (index) => {
        if (showNote.id === notas[index].id) {
            setShowNote({});
            setEditando(false);
        }
        if (estado === "Ocultar") {
            const i = guardarNotas.findIndex((nota) => nota.id === notas[index].id);
            const removeNoteGuardadas = guardarNotas.toSpliced(i, 1);
            setGuardarNotas(removeNoteGuardadas);
        }
        const removeNote = notas.toSpliced(index, 1);
        setNotas(removeNote);
    };

    const handleOnClickShowNote = (i) => {
        setShowNote(notas[i]);
        setEditando(false);
    };

    const handleOnClickEditNote = (i) => {
        if (editando) {
            setEditando(false);
            return;
        }
        setShowNote(notas[i]);
        setEditando(true);
    };

    const handleOnClickFav = (i) => {
        const fav = [...notas];
        notas[i].fav ? notas[i].fav = false : notas[i].fav = true;
        if (mostrandoFav) {
            if (showNote.id === notas[i].id) {
                setShowNote({});
                setEditando(false);
            }
            const deleteRemovefav = fav.toSpliced(i, 1);
            setNotas(deleteRemovefav);
            return;
        }
        setNotas(fav);
    };

    const handleOnClickMostrarFavoritos = () => {
        const notasFav = notas.filter((nota) => nota.fav);
        setEditando(false);
        setShowNote({});
        if (mostrandoFav) {
            setEstado("Mostrar");
            setNotas(guardarNotas);
            setMostrandoFav(false);
        } else {
            setGuardarNotas([...notas]);
            setMostrandoFav(true);
            setEstado("Ocultar");
            setNotas(notasFav);
        }
    };

    return (
        <aside className="aside">
            <div className="aside__top">
                <span className="aside__top__clickme" onClick={handleOnClickAddNote}>
                    Añadir
                </span>
                <br />
                <span className="aside__top__clickme" onClick={handleOnClickMostrarFavoritos}>
                    {estado} solo favoritos
                </span>
            </div>
            <ul className="aside__list">
                {notas.map((nota, index) => (
                    <li className="aside__list__item" key={index} onClick={() => handleOnClickShowNote(index)}>
                        <div className="aside__list__item__info">
                            <h4>{nota.titulo}</h4>
                            <p>{nota.contenido}</p>
                        </div>
                        <div className="aside__list__item__btn">
                            <span className="btn btn-delete" onClick={(e) => {e.stopPropagation(); handleOnClickRemoveNote(index);}}><FontAwesomeIcon icon={faTrash} /></span>
                            <span className="btn btn-edit" onClick={(e) => {e.stopPropagation(); handleOnClickEditNote(index);}}>{editando ? (<span className="btn-green"><FontAwesomeIcon icon={faPen} /></span>) : (<span><FontAwesomeIcon icon={faPen} /></span>)}</span>
                            <span className="btn btn-fav" onClick={(e) => {e.stopPropagation(); handleOnClickFav(index);}}>{nota.fav ? (<span className="btn-yellow"><FontAwesomeIcon icon={faStar} /></span>) : (<span><FontAwesomeIcon icon={faStar} /></span>)}</span>
                        </div>
                    </li>

                ))}
            </ul>
        </aside>
    );
};

export default Aside;