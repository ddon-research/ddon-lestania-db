import * as React from 'react';
import {ReactNode} from 'react';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

type Props = {
    children: ReactNode;
    params: {
        locale: string
    };
};

async function getMessages(locale: string) {
    try {
        return (await import(`@/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export async function generateStaticParams() {
    return ['en', 'de'].map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: Props) {
    const messages = await getMessages(locale);

    // You can use the core (non-React) APIs when you have to use next-intl
    // outside of components. Potentially this will be simplified in the future
    // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
    const t = createTranslator({locale, messages});

    return {
        title: t('RootLayout.title'),
        description: t('RootLayout.description'),
    };
}


export default async function RootLayout({children, params: {locale}}: Props) {
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeRegistry>
                {children}
            </ThemeRegistry>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
