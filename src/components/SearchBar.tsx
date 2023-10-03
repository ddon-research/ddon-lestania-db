import * as React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import theme from "./ThemeRegistry/theme";
import Box from "@mui/material/Box";
import {noto_serif} from "../fonts";

export type SearchBarProps = {
    /** This is the options passed to createCache() from 'import createCache from "@emotion/cache"' */
    children?: React.ReactNode,
    handleInput: React.FormEventHandler<HTMLDivElement> | undefined
};

const SearchBar = () => {
    const handleSearch = (event: object) => {
        // @ts-ignore
        const {value} = event.target;
        console.log('Search term:', value);
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.default,
            paddingLeft: theme.spacing(1),
        }}>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <TextField
                type="search"
                variant="outlined"
                placeholder="Search..."
                sx={{
                    marginLeft: theme.spacing(1),
                    flex: 1,
                    fontFamily: noto_serif.style.fontFamily
                }}
                onChange={handleSearch}
            />
        </Box>
    );
};

export default SearchBar;