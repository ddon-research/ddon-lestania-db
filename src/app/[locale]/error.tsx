'use client';

import {useTranslations} from 'next-intl';
import {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";

type Props = {
    error: Error;
    reset(): void;
};

export default function Error({error, reset}: Props) {
    const t = useTranslations('Error');

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <>
            <Navbar/>
            <Box>
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