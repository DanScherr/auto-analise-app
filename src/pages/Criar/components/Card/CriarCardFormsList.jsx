/** MUI */
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
/** Component */
import { CriarMount } from '../CriarMount';

export default function CriarCardFormsList(  ) {
    let title = {big: 'h5', small: 'h6'};

    return(
        /** Comprido */
        <>
            <CardContent sx={{cursor: 'default'}}>
                {/** Big Screens */}
                <Typography 
                    gutterBottom variant={title.big} component="div"
                    sx={{display: { xs: 'none', md: 'flex' }}}
                >
                    O que aconteceu?
                </Typography>
                {/** Small Screens */}
                <Typography 
                    gutterBottom variant={title.small} component="div"
                    sx={{display: { xs: 'flex', md: 'none' }}}
                >
                    O que aconteceu?
                </Typography>
                {/** Big Screens */}
                <TextField
                    id="CriarCardRoot-acontecimento-outlined-multiline-flexible"
                    label="Descreva o acontecido..."
                    multiline
                    maxRows={10}
                    sx={{width: '100%', display: { xs: 'none', md: 'flex' }}}
                />
                {/** Small Screens */}
                <TextField
                    id="CriarCardRoot-acontecimento-outlined-multiline-flexible"
                    label="Acontecimento..."
                    multiline
                    maxRows={10}
                    sx={{width: '100%', display: { xs: 'flex', md: 'none' }}}
                />
            </CardContent>
            
            <CardContent sx={{cursor: 'default'}}>
                {/** Big Screens */}
                <Typography 
                    gutterBottom variant={title.big} component="div"
                    sx={{display: { xs: 'none', md: 'flex' }}}
                >
                    O que pensou?
                </Typography>
                {/** Small Screens */}
                <Typography 
                    gutterBottom variant={title.small} component="div"
                    sx={{display: { xs: 'flex', md: 'none' }}}
                >
                    O que pensou?
                </Typography>
                <TextField
                    id="CriarCardRoot-reacao-outlined-multiline-flexible"
                    label="Descreva suas reações..."
                    multiline
                    maxRows={10}
                    sx={{width: '100%'}}
                />
            </CardContent>

            <CardContent sx={{cursor: 'default'}}>
                {/** Big Screens */}
                <Typography 
                    gutterBottom variant={title.big} component="div"
                    sx={{display: { xs: 'none', md: 'flex' }}}
                >
                    O que sentiu?
                </Typography>
                {/** Small Screens */}
                <Typography 
                    gutterBottom variant={title.small} component="div"
                    sx={{display: { xs: 'flex', md: 'none' }}}
                >
                    O que sentiu?
                </Typography>

                <Box sx={{ width: '100%', p: 2, border: '1px dashed grey' }}>
                    <Grid 
                        container 
                        spacing={{xs: 2, sm: 2, md: 2}} 
                        columns={{xs: 4, sm: 4, md: 4}}
                        justifyContent="center"
                    >
                        <Grid item xs={4} sm={4} md={2} >
                            <CriarMount.Card.Autocomplete />
                        </Grid>
                        <Grid item xs={4} sm={4} md={2} sx={{my: 'auto', textAlign: 'center'}}>
                            <CriarMount.Card.RateFeeling />
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </>
    )
}