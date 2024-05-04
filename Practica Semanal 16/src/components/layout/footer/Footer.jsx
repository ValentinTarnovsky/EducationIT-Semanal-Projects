import { NavLink } from "react-router-dom";
import { Box, Link, Tooltip } from "@mui/material";
import "./footer.scss";

import links from "../../../links/links";

import Discord from "../../../styles/svg/Discord";
import Facebook from "../../../styles/svg/Facebook";
import Instagram from "../../../styles/svg/Instagram";
import Linkedin from "../../../styles/svg/Linkedin";
import Twitter from "../../../styles/svg/Twitter";
import Youtube from "../../../styles/svg/Youtube";

const Footer = () => {
    const socialMedias = [
        { url: "https://discord.com/channels/859921242023133215/1084896600175956068", icon: <Discord/>, toolTip: "Discord" },
        { url: "/", icon: <Facebook/>, toolTip: "Facebook" },
        { url: "/", icon: <Instagram/>, toolTip: "Instagram" },
        { url: "/", icon: <Linkedin/>, toolTip: "Linkedin" },
        { url: "/", icon: <Twitter/>, toolTip: "Twitter" },
        { url: "/", icon: <Youtube/>, toolTip: "Youtube" },
    ];

    return (
        <Box
            component="footer"
            className="footer">

            <Box className="footer__groups">
                <Box>
                    <h4 className="footer__groups__title">Explorar</h4>
                    <Box className="footer__groups__list footer__groups__list--explorer">
                        {links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.url}>
                                {link.title}
                            </NavLink>
                        ))}
                    </Box>
                </Box>

                <Box>
                    <h4 className="footer__groups__title">Legales</h4>
                    <Box className="footer__groups__list footer__groups__list--legal">
                        <Link href="https://drive.google.com/file/d/1nwOMFLT4kdr45cE0urYJ-IRM5EJIR0aI/view?usp=sharing">Términos y condiciones</Link>
                    </Box>
                </Box>

                <Box>
                    <h4 className="footer__groups__title">Sociales</h4>
                    <Box className="footer__groups__list footer__groups__list--social-media">
                        {socialMedias.map((socialMedia, index) => (
                            <Tooltip
                                key={index}
                                title={socialMedia.toolTip}>
                                <Link href={socialMedia.url}>{socialMedia.icon}</Link>
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box className="footer__copyright">
                <span>&copy;2023 Todos los derechos reservados</span>
            </Box>
        </Box>
    );
};

export default Footer;