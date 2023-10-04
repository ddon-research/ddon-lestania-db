'use client';

import {useTranslations} from 'next-intl';
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {noto_serif} from "../../fonts";
import Navbar from "../../components/Navbar";

const NotFoundPageBoxStyle = {
    flexGrow: 1,
    bgcolor: 'background.default',
    mt: ['48px', '56px', '64px'],
    p: 3
};

const NotFoundPageButtonBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };
    const t = useTranslations('NotFoundPage');

    return (
        <>
            <Navbar/>
            <Box component="main" sx={NotFoundPageBoxStyle}>
                <Typography variant="h3" align="center" fontFamily={noto_serif.style.fontFamily}>
                    {t('title')}
                </Typography>
                <Divider/>
                <Typography variant="body1" align="center" fontFamily={noto_serif.style.fontFamily}>
                    {t('description')}
                </Typography>
                <Box sx={NotFoundPageButtonBoxStyle}>
                    <Button onClick={handleClick} variant='contained'>{t('buttonText')}</Button>
                </Box>
            </Box>
        </>
    );
}