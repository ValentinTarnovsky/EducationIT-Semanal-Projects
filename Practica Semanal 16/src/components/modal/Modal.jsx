import { Box, Checkbox, Modal as Modalui, FormControlLabel } from "@mui/material";



import InputField from "../form/inputField/InputField.jsx";



import { Formik, useFormik } from "formik";



import * as yup from "yup";



import { MESSAGE_REQUIRED } from "../../constanst/regexPattern.js";



import Button from "../button/Button.jsx";



import PropTypes from "prop-types";



import { NavLink } from "react-router-dom";



import useLocalStorage from "../../hooks/useLocalStorage.js";



import { useEffect } from "react";



import "./moda.scss";



const Modal = (props) => {



    const { openModal, handleCloseModal, workingProduct, products, setProducts } = props;



    const localStorage = useLocalStorage();



    const validationSchema = yup.object({



        name: yup



            .string("Ingresa el nombre")



            .min(3, "Ingresa un nombre que tenga mas de 3 carateres")



            .required(MESSAGE_REQUIRED),



        price: yup



            .number("Ingresa el precio")



            .typeError("Ingresa el precio en numeros")



            .required(MESSAGE_REQUIRED),



        stock: yup



            .number("Ingresa el stock")



            .typeError("Ingresa el stock en numeros")



            .required(MESSAGE_REQUIRED),



        isPromotion: yup



            .boolean(),



        description: yup



            .string("Ingresa tu consulta")



            .min(11, "Ingresa una descripción que tenga entre 15 y 150 carateres")



            .required(MESSAGE_REQUIRED),



    });



    const formik = useFormik({



        initialValues: {



            name: workingProduct.current.name,



            price: workingProduct.current.price,



            stock: workingProduct.current.stock,



            isPromotion: workingProduct.current.isPromotion,



            description: workingProduct.current.description,



        },



        validationSchema: validationSchema,



        onSubmit: (values) => {



            let newProducts = products.map((product, i) => {



                if (i === formik.values.index) {



                    return {



                        ...product,



                        name: formik.values.name,



                        price: parseFloat(formik.values.price),



                        stock: parseFloat(formik.values.stock),



                        isPromotion: formik.values.isPromotion,



                        description: formik.values.description,



                    };



                }



                return product;



            });



            if (formik.values.index === "new") {



                newProducts = [ ...newProducts, {



                    id: newProducts[newProducts.length-1].id+1,



                    name: formik.values.name,



                    description: formik.values.description,



                    image: "",



                    stock: parseFloat(formik.values.stock),



                    price: parseFloat(formik.values.price),



                    isPromotion: formik.values.isPromotion,



                }];



            }



            setProducts(newProducts);



            localStorage.setItem("products", newProducts);



            handleCloseModal();



        },



    });



    Modal.propTypes = {



        openModal: PropTypes.bool.isRequired,



        handleCloseModal: PropTypes.func.isRequired,



    };



    useEffect(() => {



        if (!openModal) {



            formik.resetForm();



        }



        if (workingProduct.current) {



            formik.setValues(workingProduct.current);



        }



    }, [ openModal, workingProduct.current ]);



    return (



        <Modalui



            open={openModal}



            onClose={handleCloseModal}>



            <Box className="product">



                <Box



                    className="modal">



                    <h3 className="modal__title">Producto</h3>



                    <Box



                        component="form"



                        className="modal__form"



                        noValidate



                        autoComplete="off"



                        onSubmit={formik.handleSubmit}>



                        <InputField



                            label="Nombre"



                            name="name"



                            value={formik.values.name}



                            onChange={formik.handleChange}



                            onBlur={formik.handleBlur}



                            error={formik.touched.name && Boolean(formik.errors.name)}



                            errorMessage={formik.touched.name && formik.errors.name}



                            inputProps={{ maxLength: 25 }}>



                        </InputField>



                        <InputField



                            label="Precio"



                            name="price"



                            value={formik.values.price}



                            onChange={formik.handleChange}



                            onBlur={formik.handleBlur}



                            error={formik.touched.price && Boolean(formik.errors.price)}



                            errorMessage={formik.touched.price && formik.errors.price}



                            inputProps={{ maxLength: 12 }}>



                        </InputField>



                        <InputField



                            label="Stock"



                            name="stock"



                            value={formik.values.stock}



                            onChange={formik.handleChange}



                            onBlur={formik.handleBlur}



                            error={formik.touched.stock && Boolean(formik.errors.stock)}



                            errorMessage={formik.touched.stock && formik.errors.stock}



                            inputProps={{ maxLength: 6 }}>



                        </InputField>



                        <FormControlLabel



                            control={



                                <Checkbox



                                    id="isPromotion"



                                    name="isPromotion"



                                    checked={formik.values.isPromotion}



                                    onChange={formik.handleChange}/>



                            }



                            label="Activar oferta"



                        />



                        <InputField



                            label="Descripción"



                            name="description"



                            multiline



                            rows={5}



                            value={formik.values.description}



                            onChange={formik.handleChange}



                            onBlur={formik.handleBlur}



                            error={formik.touched.description && Boolean(formik.errors.description)}



                            errorMessage={formik.touched.description && formik.errors.description}



                            inputProps={{ maxLength: 150 }}>



                        </InputField>



                        <Button



                            type="submit">



                                Guardar



                        </Button>



                        <Button



                            component={NavLink}



                            to="/lista"



                            type="button"



                            color="danger"



                            onClick={handleCloseModal}>



                                Cancelar



                        </Button>



                    </Box>



                </Box>



            </Box>



        </Modalui>



    );



};



export default Modal;