'use client';

import * as React from 'react';
import LeftVerticalMenu from "../../components/LeftVerticalMenu";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Box from "@mui/material/Box";
import {DRAWER_WIDTH} from "../../constants";

const HomePageChildrenBoxStyle = {
    flexGrow: 1,
    bgcolor: 'background.default',
    ml: `${DRAWER_WIDTH}px`,
    mt: ['48px', '56px', '64px'],
    p: 3
};


export default function HomePage() {
    return (
        <>
            <Navbar/>
            <LeftVerticalMenu/>
            <Box component="main" sx={HomePageChildrenBoxStyle}>
                <SearchBar/>
            </Box>
        </>
    );
}
