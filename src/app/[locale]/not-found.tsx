'use client';

import {useTranslations} from 'next-intl';
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {noto_serif} from "../../fonts";
import Navbar from "../../components/Navbar";

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
            <Box mt={15}>
                <Typography variant="h3" align="center" m={5} fontFamily={noto_serif.style.fontFamily}>
                    {t('title')}
                </Typography>
                <Divider/>
                <Typography variant="body1" align="center" m={2} fontFamily={noto_serif.style.fontFamily}>
                    {t('description')}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button onClick={handleClick} variant='contained'>{t('buttonText')}</Button>
                </Box>
            </Box>
        </>
    );
}