import React, { useState } from "react";
import {
    FormGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    Button,
    Container,
    TextField,
    Checkbox,
    Box,
    MenuItem,
    RadioGroup,
    Radio,
    Select,
    Grid,
} from "@mui/material";

export const Register = () => {
    const [country, setCountry] = useState('');
    const [uID, setID] = useState('');   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [gender, setGender] = useState('');
    const [languages, setLanguages] = useState([]);
    
    // Error states
    const [error, setError] = useState({
        uID: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        address: '',
        state: '',
        city: '',
        zip: '',
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = {};

        if (uID.trim() === '' || uID.length < 5) {
            newErrors.uID = 'User ID must be at least 5 characters';
            isValid = false;
        }
        if (name.trim() === '') {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!validateEmail(email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }
        if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }
        if (country === '') {
            newErrors.country = 'Country is required';
            isValid = false;
        }
        if (address.trim() === '') {
            newErrors.address = 'Address is required';
            isValid = false;
        }
        if (state.trim() === '') {
            newErrors.state = 'State is required';
            isValid = false;
        }
        if (city.trim() === '') {
            newErrors.city = 'City is required';
            isValid = false;
        }
        if (zip.trim() === '') {
            newErrors.zip = 'Zip code is required';
            isValid = false;
        }

        setError(newErrors);

        if (isValid) {
            // Submit form logic here (e.g., send data to server)
            const user = {
                uID,
                name,
                email,
                password,
                country,
                address,
                state,
                city,
                zip,
                gender,
                languages,
            };
            console.log("Form Submitted", user);
        }
    };

    return (
        <Container component="main" maxWidth="md"> {/* Changed to "md" for wider layout */}
            <h1>Registration Form</h1>

            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }} noValidate autoComplete="off">
                <FormGroup>
                    <Grid container spacing={2}> {/* Add grid container with spacing */}
                        {/* First Row */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="User ID"
                                variant="outlined"
                                size="small"
                                value={uID}
                                onChange={(e) => setID(e.target.value)}
                                error={!!error.uID}
                                helperText={error.uID}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                size="small"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={!!error.name}
                                helperText={error.name}
                                fullWidth
                            />
                        </Grid>

                        {/* Second Row */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                size="small"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!error.email}
                                helperText={error.email}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Password"
                                variant="outlined"
                                size="small"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!error.password}
                                helperText={error.password}
                                fullWidth
                            />
                        </Grid>

                        {/* Third Row */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Confirm Password"
                                variant="outlined"
                                size="small"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                error={!!error.confirmPassword}
                                helperText={error.confirmPassword}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Address"
                                variant="outlined"
                                size="small"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                error={!!error.address}
                                helperText={error.address}
                                fullWidth
                            />
                        </Grid>

                        {/* Fourth Row */}
                        <Grid item xs={12} sm={6}>
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    error={!!error.country}
                                    fullWidth
                                    size="small"
                                >
                                    <MenuItem value=""><span>Select Country</span></MenuItem>
                                    <MenuItem value={"PAK"}>Pakistan</MenuItem>
                                    <MenuItem value={"IND"}>India</MenuItem>
                                    <MenuItem value={"CHI"}>China</MenuItem>
                                </Select>
                                <span style={{ color: "red", fontSize: "12px" }}>{error.country}</span>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="State"
                                variant="outlined"
                                size="small"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                error={!!error.state}
                                helperText={error.state}
                                fullWidth
                            />
                        </Grid>

                        {/* Fifth Row */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="City"
                                variant="outlined"
                                size="small"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                error={!!error.city}
                                helperText={error.city}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Zip Code"
                                variant="outlined"
                                size="small"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                error={!!error.zip}
                                helperText={error.zip}
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    {/* Sixth Row - Gender and Language */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="gender-label"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl>
                                <FormLabel>Languages</FormLabel>
                                <FormControlLabel
                                    control={<Checkbox checked={languages.includes("English")} onChange={(e) => {
                                        const value = e.target.checked ? [...languages, "English"] : languages.filter(lang => lang !== "English");
                                        setLanguages(value);
                                    }} />}
                                    label="English"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={languages.includes("Urdu")} onChange={(e) => {
                                        const value = e.target.checked ? [...languages, "Urdu"] : languages.filter(lang => lang !== "Urdu");
                                        setLanguages(value);
                                    }} />}
                                    label="Urdu"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={languages.includes("Hindi")} onChange={(e) => {
                                        const value = e.target.checked ? [...languages, "Hindi"] : languages.filter(lang => lang !== "Hindi");
                                        setLanguages(value);
                                    }} />}
                                    label="Hindi"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    {/* Submit Button */}
                    <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} sx={{ mt: 3 }}>
                        Submit
                    </Button>
                </FormGroup>
            </Box>
        </Container>
    );
};
