import {createTheme} from '@mui/material/styles';
import {coelacanth} from "../../fonts";

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: coelacanth.style.fontFamily,
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
