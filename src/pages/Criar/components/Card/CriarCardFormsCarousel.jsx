import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CriarMount } from '../CriarMount';
import { useEffect, useState } from 'react';
import { toHaveFormValues } from '@testing-library/jest-dom/matchers';

export default function CriarCardFormsCarousel(  ) {

    /** Input Values */
    const [acontecimento, setAcontecimento] = useState('');
    const [pensamento, setPensamento] = useState('');
    // const [atitude, setAtitude] = useState('');
    const [sentimentoDesc, setSentimentoDesc] = useState('');
    const [sentimentoState, setSentimentoState] = useState(Number);

    useEffect(() => {
        console.log(acontecimento);
    }, [acontecimento])
    useEffect(() => {
        console.log(pensamento);
    }, [pensamento])
    useEffect(() => {
        console.log(sentimentoDesc);
    }, [sentimentoDesc])
    useEffect(() => {
        console.log(sentimentoState);
    }, [sentimentoState])
    const handleChangeAcontecimento = (e) => setAcontecimento(e.target.value)
    const handleChangePensamento = (e) => setPensamento(e.target.value)

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
                            value={acontecimento}
                            onChange={handleChangeAcontecimento}
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
                            value={pensamento}
                            onChange={handleChangePensamento}
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
                                    <CriarMount.Card.Autocomplete 
                                        value={sentimentoDesc}
                                        setValue={setSentimentoDesc}
                                    />
                                </Grid>
                                <Grid item xs={4} sm={4} md={2} sx={{my: 'auto', textAlign: 'center'}}>
                                    <CriarMount.Card.RateFeeling 
                                        value={sentimentoState}
                                        setValue={setSentimentoState}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                ]}
            />
        </CardContent>
    )
}