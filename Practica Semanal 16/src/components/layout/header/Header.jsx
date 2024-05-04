import { Box } from "@mui/material";
import "./header.scss";

import Navbar from "../navbar/Navbar";
import Logo from "../../logo/Logo";

const Header = () => {
    return (
        <Box
            component="header"
            className="header">
            <Navbar/>

            <Box className="header__group">
                <Logo/>
                <h1 className="header__group__title">
                    Pizza
                    <span className="header__group__title header__group__title--color">Store</span>
                </h1>
                <Logo/>
            </Box>
        </Box>
    );
};

export default Header;