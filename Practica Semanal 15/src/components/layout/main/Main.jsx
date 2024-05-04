import { Box, Paper, InputBase, Divider, IconButton, CircularProgress, Alert } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClimaCiudad from "../clima/ClimaCiudad.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

import "./main.scss";

const Main = () => {
    const [ city, setCity ] = useState("Buenos Aires");
    const [ weatherData, setWeatherData ] = useState(null);
    const [ alert, setAlert ] = useState(false);

    const fetchWeatherData = async () => {
        try {
            const apiKey = "96b7e6b439340d4103f211661c2e0cb8";
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeatherData(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 5000);
        }
    };

    const handleOnChangeSearch = (e) => {
        setCity(e.target.value);
    };

    const handleOnClickSearch = async (e) => {
        e.preventDefault();
        fetchWeatherData();
        setWeatherData(null);
    };

    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        fetchWeatherData();
        setWeatherData(null);
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <Box
            component="main"
            className="main">
            <Paper
                component="form"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "90%", maxWidth: "600px" }}
                onSubmit={handleOnSubmitForm}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search a city"
                    onChange={handleOnChangeSearch}
                />
                <Divider
                    sx={{ height: 28, m: 0.5 }}
                    orientation="vertical"/>
                <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    onClick={handleOnClickSearch}>
                    <SearchIcon/>
                </IconButton>
            </Paper>
            {alert ? (
                <Alert
                    className="main__alert"
                    variant="filled"
                    severity="error"
                    sx={{ width: "90%", maxWidth: "600px" }}>
                    Please, provide a valid city.
                </Alert>
            ) : (
                ""
            )}
            {weatherData ? (
                <ClimaCiudad
                    city={weatherData.name}
                    temp={weatherData.main.temp}/>
            ) : (
                <CircularProgress className="main__display main__display--loading"/>
            )}
        </Box>
    );
};

export default Main;