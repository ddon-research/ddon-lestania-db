'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from "@/components/Navbar";
import LeftVerticalMenu from "@/components/LeftVerticalMenu";
import {DRAWER_WIDTH} from "@/constants";
import RichTable from "@/components/RichTable";

export default function ItemPage() {
    return (
        <>
            <Navbar/>
            <LeftVerticalMenu/>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    ml: `${DRAWER_WIDTH}px`,
                    mt: ['48px', '56px', '64px'],
                    p: 3,
                }}
            >
                <RichTable/>
            </Box>
        </>
    );
}
