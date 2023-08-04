/** MUI */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewDayIcon from '@mui/icons-material/ViewDay';
/** Assets */
import img0 from './../../../../static/images/criar/card/0.png'
import img1 from  './../../../../static/images/criar/card/1.png'
import img2 from  './../../../../static/images/criar/card/2.png'
import img3 from  './../../../../static/images/criar/card/3.png'
import img4 from  './../../../../static/images/criar/card/4.png'
import img5 from  './../../../../static/images/criar/card/5.png'
/** Components */
import { useEffect, useState } from 'react';
import { CriarMount } from '../CriarMount';


export default function CriarCardRoot({
    altImg='card picture', 
}) {

    let listOfImgs = [ img0, img1, img2, img3, img4, img5 ];
    const [viewCarousel, setViewCarousel] = useState(true);
    
    const [reqBody, setReqBody] = useState({
        acontecimento: acontecimento,
        pensamento: pensamento,
        atitude: atitude,
        sentimentoDesc: sentimentoDesc,
        sentimentoState: sentimentoState
    });

    return (
        <>
            <Card sx={{ maxWidth: 600, my: 'auto', mx: 'auto' }}>
                <CardActionArea sx={{cursor: 'default'}}>
                    {/** Select Icon to View Option */}
                    <Box sx={{p: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button onClick={()=>setViewCarousel(false)} >
                            <ViewDayIcon />
                        </Button>
                        <Button onClick={()=>setViewCarousel(true)}>
                            <ViewCarouselIcon />
                        </Button>
                    </Box>

                    {/** Image Big Screens */}
                    <CardMedia
                        component="img"
                        height="150"
                        image={listOfImgs[Math.floor(Math.random() * 5)]}
                        alt={altImg}
                        sx={{display: { xs: 'none', md: 'flex' }, cursor: 'default'}}
                    />
                    {/** Image Small Screens */}
                    <CardMedia
                        component="img"
                        height="80"
                        image={listOfImgs[Math.floor(Math.random() * 5)]}
                        alt={altImg}
                        sx={{display: { xs: 'flex', md: 'none' }, cursor: 'default', mt: 2}}
                    />

                    {/** Forms */}
                    {
                        viewCarousel ?
                        <>
                            <CriarMount.Card.Form.Carousel />
                            {/** Buttons */}
                            <CardContent sx={{cursor: 'default', pt: 0, textAlign: 'end'}}>
                                <Button variant="contained">Submit</Button>
                                <Button variant="outlined" sx={{ml: 1}}>Save</Button>
                            </CardContent>
                        </>                        
                        :
                        <>
                            <CriarMount.Card.Form.List />
                            <CardContent sx={{cursor: 'default', pt: 0.5, textAlign: 'end'}}>
                                <Button variant="contained">Submit</Button>
                                <Button variant="outlined" sx={{ml: 1}}>Save</Button>
                            </CardContent>
                        </> 
                    }
                </CardActionArea>
            </Card>
            <Box />
        </>
    )
};

/** Fetch API */
const postCriacao = async () => {
    let data = [];
    try {
        const response = await axios.post(
            `/api/v1/criacao`, 
            {body},
            {mode: 'no-cors'}
        );
        data=response.data.data;
        console.log(response)
    } catch (error) {
        console.log(error);
    };
    setCriacao({loading: false, data: data});
};