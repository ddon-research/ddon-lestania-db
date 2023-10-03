'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from "../../../components/Navbar";
import LeftVerticalMenu from "../../../components/LeftVerticalMenu";
import {DRAWER_WIDTH} from "../../../constants";
import Stack from '@mui/material/Stack';
import ImageActionCard from "../../../components/ImageActionCard";
import {useTranslations} from "next-intl";

const vocationMap = [
    {
        vocation: 'fighter',
        headingIconUrl: '/images/lestania-db/job/icon-job_fighter.png',
        imageUrl: '/images/lestania-db/job/job_fighter.png'
    },
    {
        vocation: 'hunter',
        headingIconUrl: '/images/lestania-db/job/icon-job_hunter.png',
        imageUrl: '/images/lestania-db/job/job_hunter.png'
    },
    {
        vocation: 'priest',
        headingIconUrl: '/images/lestania-db/job/icon-job_priest.png',
        imageUrl: '/images/lestania-db/job/job_priest.png'
    },
    {
        vocation: 'shieldsage',
        headingIconUrl: '/images/lestania-db/job/icon-job_shieldsage.png',
        imageUrl: '/images/lestania-db/job/job_shieldsage.png'
    },
];


export default function VocationPage() {
    const translations = useTranslations('VocationPage');

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
                <Box sx={{
                    display: 'flex',
                    m: 5
                }}>
                    <Stack spacing={2}>
                        {vocationMap.map(({vocation, headingIconUrl, imageUrl}) => (
                            <ImageActionCard
                                key={vocation}
                                heading={translations(`${vocation}.name`)}
                                headingIconUrl={headingIconUrl}
                                text={translations(`${vocation}.shortDescription`)}
                                imageUrl={imageUrl}
                            />
                        ))}
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
