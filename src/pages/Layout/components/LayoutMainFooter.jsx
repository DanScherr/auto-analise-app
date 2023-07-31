//@ts-check
/** State */
import React, { useEffect, useState } from 'react';
/** MUI */
import { 
    Box,
    BottomNavigation,
    BottomNavigationAction, 
} from '@mui/material';
import RoofingIcon from '@mui/icons-material/Roofing';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DescriptionIcon from '@mui/icons-material/Description';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useNavigate } from 'react-router-dom';


export default function LayoutMainFooter( ) {
    const [value, setValue] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        navigateTo(value, navigate);
    }, [value]);

    return(
        <>
            <Box sx={{
                color: 'primary.lightMain', 
                bgcolor: 'background.footBox', 
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'}}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log('mudanca de valor:', value)
                        setValue(newValue);
                    }}
                    sx={{bgcolor: 'background.footBox', }}
                >
                    <BottomNavigationAction label="Home" icon={<RoofingIcon />} />
                    <BottomNavigationAction label="Crie" icon={<EditNoteIcon />} />
                    <BottomNavigationAction label="Revise" icon={<DescriptionIcon />} />
                    <BottomNavigationAction label="Analise" icon={<AnalyticsIcon />} />
                </BottomNavigation>
            </Box>
        </>
    )
};

const navigateTo = ((valor, func) => {
    switch (valor) {
        case 0:
            func('/');
            break;
        
        case 1:
            func('/criar');
            break;

        case 2:
            func('/revisar');
            break;
        
        case 3:
            func('/analisar');
            break;
    
        default:
            break;
    };
});