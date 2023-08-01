import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CriarMount } from '../CriarMount';

export default function CriarCardFormsCarousel(  ) {
    return (
        <CardContent>
            <CriarMount.Card.Carousel 
                labels={['', '', '']}
                descriptions={[
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                        O que aconteceu?
                        </Typography>
                        <TextField
                            id="CriarCardRoot-acontecimento-outlined-multiline-flexible"
                            label="Descreva o acontecido..."
                            multiline
                            maxRows={10}
                            sx={{width: '100%'}}
                        />
                    </>,

                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            O que pensou?
                        </Typography>
                        <TextField
                            id="CriarCardRoot-reacao-outlined-multiline-flexible"
                            label="Descreva suas reações..."
                            multiline
                            maxRows={10}
                            sx={{width: '100%'}}
                        />
                    </>,

                    <>
                        <Typography gutterBottom variant="h5" component="div">
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
                    </>
                ]}
            />
        </CardContent>
    )
}