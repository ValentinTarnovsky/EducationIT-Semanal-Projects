import { Box } from "@mui/material";
import "./footer.scss";

const Footer = () => {
    return (
        <Box
            component="footer"
            className="footer">
            <p className="footer__copy">&copy;2024 Weather App</p>
        </Box>
    );
};

export default Footer;