import { PropTypes } from "prop-types";
// import { useEffect, useState } from "react";

const ClimaCiudad = (props) => {
    const { city, temp } = props;
    return (
        <div className="main__display">
            <h2 className="main__display__title">{city}</h2>
            <h3 className="main__display__temp">{temp.toFixed(0)}<span>°C</span></h3>
            {temp > 30 ? (
                <p>Hace mucho calor!</p>
            ) : (
                ""
            )}
            {temp < 10 ? (
                <p>Hace mucho frío!</p>
            ) : (
                ""
            )}
        </div>
    );
};

ClimaCiudad.propTypes = {
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
};

export default ClimaCiudad;