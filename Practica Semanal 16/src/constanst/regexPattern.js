const MESSAGE_REQUIRED = "Este dato es obligatorio";
const MESSAGE_TELEPHONE_INVALID = "Ingresa un teléfono válido. Ej: (0264)424-1020";
const MESSAGE_EMAIL_INVALID = "Ingresa un email válido. Ej. ser@gmail.com";

const REGEX_TELEPHONE = /^[(][0-9]{3,4}[)][0-9]{3}[-][0-9]{4,8}$/;
const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;

export {
    MESSAGE_REQUIRED,
    MESSAGE_TELEPHONE_INVALID,
    MESSAGE_EMAIL_INVALID,
    REGEX_TELEPHONE,
    REGEX_EMAIL,
};