import {EB_Garamond, Noto_Sans, Noto_Sans_JP, Noto_Serif, Noto_Serif_JP} from 'next/font/google'

export const eb_garamond = EB_Garamond({
    weight: 'variable',
    style: ['normal', 'italic'],
    display: 'swap',
    preload: true,
    subsets: ['greek', 'latin']
});
export const noto_serif = Noto_Serif({
    weight: 'variable',
    style: ['normal', 'italic'],
    display: 'swap',
    preload: true,
    subsets: ['greek', 'latin']
});

export const noto_sans = Noto_Sans({
    weight: ['400', '600', '800'],
    style: ['normal', 'italic'],
    display: 'swap',
    preload: true,
    subsets: ['greek', 'latin']
});

export const noto_serif_jp = Noto_Serif_JP({
    weight: ['400', '600', '900'],
    style: 'normal',
    display: 'swap',
    preload: true,
    subsets: ['latin']
});

export const noto_sans_jp = Noto_Sans_JP({
    weight: 'variable',
    style: 'normal',
    display: 'swap',
    preload: true,
    subsets: ['latin']
});
