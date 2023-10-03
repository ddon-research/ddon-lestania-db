'use client';

import {useTranslations} from 'next-intl';
import {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";

type Props = {
    error: Error;
    reset(): void;
};

export default function ErrorPage({error, reset}: Props) {
    const t = useTranslations('ErrorPage');

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <>
            <Navbar/>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    mt: ['48px', '56px', '64px'],
                    p: 3,
                }}
            >
                {t.rich('description', {
                    p: (chunks) => <p>{chunks}</p>,
                    retry: (chunks) => (
                        <button
                            onClick={reset}
                            type="button"
                        >
                            {chunks}
                        </button>
                    )
                })}
            </Box>
        </>
    );
}