import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const links = [
    { title: "Inicio", url: "/", icon: <HomeOutlinedIcon/> },
    { title: "Nosotros", url: "/about", icon: <StorefrontOutlinedIcon/> },
    { title: "Contacto", url: "/contact", icon: <EmailOutlinedIcon/> },
    { title: "Lista", url: "/lista", icon: <FormatListBulletedIcon/> },
];

export default links;