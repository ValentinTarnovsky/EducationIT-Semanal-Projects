import { Box } from "@mui/material";
import "./lista.scss";
import ProductList from "../../components/ProductList/productList";

const Home = () => {
    return (
        <Box className="lista">
            <ProductList/>
        </Box>
    );
};

export default Home;