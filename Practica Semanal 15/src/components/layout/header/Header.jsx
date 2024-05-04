import { Box } from "@mui/material";
import "./header.scss";

const Header = () => {
    return (
        <Box
            component="header"
            className="header">
            <h1 className="header__title">Weather App</h1>
        </Box>
    );
};

export default Header;