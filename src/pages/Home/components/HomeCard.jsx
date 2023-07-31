import { CardActionArea } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardImg from "./../../../static/images/home/no-img.svg"



export default function HomeCard( {
    img='not found', 
    altImg='card picture', 
    title='undefined', 
    desc='lorem ipsum'
}){
    return (
        <>
            <Card sx={{ 
                maxWidth: 700, 
                mx:'auto', 
                my: 'auto', 
                color: 'inherit',
                cursor: 'pointer'
            }}
            >
                <CardActionArea sx={{cursor: 'default'}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img === 'not found' ? CardImg : img}
                        alt={altImg}
                        sx={{mt: 2, color: 'primary.veryLightMain', cursor: 'default'}}
                    />
                    <CardContent sx={{cursor: 'default'}}>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{fontWeight: 'bold', cursor: 'default'}}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{cursor: 'default', textAlign: 'justify'}}>
                        {desc}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}