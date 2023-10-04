import * as React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import theme from "./ThemeRegistry/theme";
import {noto_serif} from "../fonts";

const SearchBarBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    paddingLeft: theme.spacing(1)
};

const SearchBarTextFieldStyle = {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontFamily: noto_serif.style.fontFamily
};

type SearchBarProps = {
    handleSearch: React.FormEventHandler<HTMLDivElement> | undefined
};

const SearchBar = () => {
    const handleSearch = (event: object) => {
        // @ts-ignore
        const {value} = event.target;
        console.log('Search term:', value);
    };

    return (
        <Box sx={SearchBarBoxStyle}>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <TextField
                type="search"
                variant="outlined"
                placeholder="Search..."
                sx={SearchBarTextFieldStyle}
                onChange={handleSearch}
            />
        </Box>
    );
};

export default SearchBar;