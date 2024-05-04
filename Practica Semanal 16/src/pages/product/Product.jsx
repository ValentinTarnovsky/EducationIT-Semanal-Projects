import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
import "./product.scss";

import {
    MESSAGE_REQUIRED,
} from "../../constanst/regexPattern.js";

import InputField from "../../components/form/inputField/InputField";
import Button from "../../components/button/Button";

const Product = () => {

    // id: 1,
    // name: "PIZZA DE ANANÁ CON JAMÓN",
    // description: "Salsa de tomate, Ananá al Natural, Jamón Cocido, Quezo Muzzarella y Aceitunas Negras Rayadas.",
    // image: "/images/home/products/img0001.jpg",
    // stock: 10,
    // price: 7800.00,
    // isPromotion: false,
    const validationSchema = yup.object({
        name: yup
            .string("Ingresa el nombre")
            .min(3, "Ingresa un nombre que tenga mas de 3 carateres")
            .required(MESSAGE_REQUIRED),
        price: yup
            .string("Ingresa el precio")
            .required(MESSAGE_REQUIRED),
        stock: yup
            .string("Ingresa el stock")
            .required(MESSAGE_REQUIRED),
        description: yup
            .string("Ingresa tu consulta")
            .min(11, "Ingresa una consulta que tenga entre 15 y 150 carateres")
            .required(MESSAGE_REQUIRED),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box className="product">
            <Box
                component="section"
                className="product_section">
                <h3>Producto</h3>

                <Box
                    component="form"
                    className="product_section__form"
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

                    <Button type="submit">Guardar</Button>
                    <Button
                        component={NavLink}
                        to="/"
                        type="button"
                        color="danger">
                            Cancelar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Product;