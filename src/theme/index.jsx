/** MUI */
import {createTheme} from '@mui/material';
import { grey, lime, teal } from '@mui/material/colors';

const color1 = lime;
const colo2 = teal;

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            navBar: grey[900],
            footBox: grey[800]
        },
        primary: {
            main: color1['A400'],
            lightMain: color1['A200'],
            veryLightMain: color1['A100'],
            lightestMain: color1['50'],
        },
        secondary: {
            main: colo2['A700'],
            veryLightMain: colo2[600],
        },
    }
});