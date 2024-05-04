import { useEffect } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";
import "./productSearch.scss";

import { pizzas } from "../../data/data.js";

import InputField from "../form/inputField/InputField.jsx";
import Button from "../button/Button.jsx";

import SearchIcon from "@mui/icons-material/Search";

const ProductSearch = (props) => {
    const { setProducts } = props;

    useEffect(() => {
        setProducts(pizzas);
    }, []);

    const validationSchema = yup.object({
        search: yup
            .string("Ingresa un texto")
            .min(3, "Ingresa 3 o más carateres"),
    });

    const getProducts = (text) => {
        const preparedText = text.toLowerCase().trim();

        const filterdPizzas = pizzas.filter((pizza) => {
            const preparedPizza = pizza.name.toLowerCase().trim();

            if (preparedPizza.includes(preparedText)) {
                return pizza;
            }
        });

        setProducts(filterdPizzas);
    };

    const formik = useFormik({
        initialValues: {
            search: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            getProducts(values.search);
        },
    });

    const handleOnChange = (event) => {
        formik.handleChange(event);

        if (event.target.value.trim().length === 0) {
            setProducts(pizzas);
        }
    };

    return (
        <Box
            component="form"
            className="product-search"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                name="search"
                value={formik.values.search}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
                error={formik.touched.search && Boolean(formik.errors.search)}
                errorMessage={formik.touched.search && formik.errors.search}
                inputProps={{ maxLength: 10 }}>
            </InputField>

            <Button type="submit"><SearchIcon/></Button>
        </Box>
    );
};

ProductSearch.propTypes = {
    setProducts: PropTypes.func.isRequired,
};

export default ProductSearch;