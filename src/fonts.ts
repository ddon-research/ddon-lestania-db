import {Noto_Sans, Noto_Sans_JP, Noto_Serif, Noto_Serif_JP} from 'next/font/google'
import localFont from 'next/font/local'

export const coelacanth = localFont({
    src: [
        {
            path: './font/CoelacanthLight.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './font/Coelacanth.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './font/CoelacanthItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './font/CoelacanthBold.woff2',
            weight: '700',
            style: 'normal',
        }
    ],
    display: 'swap',
})

export const noto_serif = Noto_Serif({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'greek'],
    display: 'swap',
});

export const noto_sans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'greek'],
    display: 'swap',
});

export const noto_serif_jp = Noto_Serif_JP({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const noto_sans_jp = Noto_Sans_JP({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
