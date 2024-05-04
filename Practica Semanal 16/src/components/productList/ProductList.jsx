import { useEffect, useState, useRef } from "react";
import { pizzas } from "../../data/data.js";
import { Box, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "../button/Button.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import Modal from "../modal/Modal.jsx";

import "./productList.scss";

const ProductList = () => {
    const [ products, setProducts ] = useState();
    const localStorage = useLocalStorage({ products: pizzas });

    const workingProduct = useRef({
        name: "",
        price: "",
        stock: "",
        isPromotion: false,
        description: "",
    });

    const [ openModal, setOpenModal ] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                await setProducts(JSON.parse(window.localStorage.getItem("products")));
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleOnClickDelete = (index) => {
        const deleteArray = products.toSpliced(index, 1);
        localStorage.setItem("products", deleteArray);
        setProducts(deleteArray);
    };

    const handleOnClickEdit = (index) => {
        workingProduct.current = {
            index: index,
            name: products[index].name,
            price: products[index].price,
            stock: products[index].stock,
            isPromotion: products[index].isPromotion,
            description: products[index].description,
        }
    };

    const handleOnClickAddProduct = () => {
        workingProduct.current = {
            index: "new",
            name: "",
            price: "",
            stock: "",
            isPromotion: false,
            description: "",
        }
        handleOpenModal();
    };

    return (
        <Box>
            {products ? (
                <Box>
                    <h3 className="lista__title">Lista</h3>
                    <Button
                        onClick={() => handleOnClickAddProduct()}>
                            Agregar producto
                    </Button>
                    <ul className="lista__list">
                        {products.map((product, i) => (
                            <li
                                key={i}
                                className="lista__list__items">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <span>Stock: {product.stock.toFixed(0)}</span>
                                <span>${product.price.toFixed(2)}</span>
                                {product.isPromotion ? (
                                    "Esta en promocion avitva"
                                ) : (
                                    "No esta en promocion activa"
                                )}
                                <Box className="lista__list__items__btns">
                                    <Button
                                        color="danger"
                                        onClick={() => handleOnClickDelete(i)}>
                                        <DeleteIcon/>Eliminar
                                    </Button>
                                    <Button
                                        color="black"
                                        onClick={() => {
                                            handleOpenModal();
                                            handleOnClickEdit(i);
                                        }}
                                    >
                                        <EditIcon/>Editar
                                    </Button>
                                    <Modal
                                        openModal={openModal}
                                        handleCloseModal={handleCloseModal}
                                        workingProduct={workingProduct}
                                        products={products}
                                        setProducts={setProducts}/>
                                </Box>
                            </li>
                        ))}
                    </ul>
                </Box>
            ) : (
                <Box>
                    <CircularProgress/>
                </Box>
            )}
        </Box>
    );
};

export default ProductList;