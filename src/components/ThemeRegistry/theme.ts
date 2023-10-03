import {createTheme, Theme} from '@mui/material/styles';
import {eb_garamond} from "../../fonts";

const theme: Theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: eb_garamond.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ownerState}) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;
