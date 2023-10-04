'use client';

import * as React from 'react';
import {Suspense} from 'react';
import Box from '@mui/material/Box';
import Navbar from "@/components/Navbar";
import LeftVerticalMenu from "@/components/LeftVerticalMenu";
import Stack from '@mui/material/Stack';
import ImageActionCard from "@/components/ImageActionCard";
import {useTranslations} from "next-intl";
import {DRAWER_WIDTH} from "@/constants";
import {vocations} from "@/util/vocations";

const VocationPageCardBoxStyle = {
    display: 'flex',
    m: 5
};

const VocationPageBoxStyle = {
    flexGrow: 1,
    bgcolor: 'background.default',
    ml: `${DRAWER_WIDTH}px`,
    mt: ['48px', '56px', '64px'],
    p: 3
};

export default function VocationPage() {
    const translations = useTranslations('VocationPage');

    return (
        <>
            <Navbar/>
            <LeftVerticalMenu/>
            <Box component="main" sx={VocationPageBoxStyle}>
                <Box sx={VocationPageCardBoxStyle}>
                    <Suspense fallback={<p>Loading vocations...</p>}>
                        <Stack spacing={2}>
                            {vocations.map(({vocation, headingIconUrl, imageUrl}) => (
                                <ImageActionCard
                                    key={vocation}
                                    heading={translations(`${vocation}.name`)}
                                    headingIconUrl={headingIconUrl}
                                    text={translations(`${vocation}.shortDescription`)}
                                    imageUrl={imageUrl}
                                />
                            ))}
                        </Stack>
                    </Suspense>
                </Box>
            </Box>
        </>
    );
}
