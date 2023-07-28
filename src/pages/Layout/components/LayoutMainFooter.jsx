//@ts-check
/** State */
import React from 'react';
/** Navigate */
// import { useNavigate } from 'react-router-dom';
/** MUI */
import { 
    Toolbar, 
    Container, 
    // Typography, 
    Box, 
    // Slide, 
    // useScrollTrigger, 
    // IconButton, 
    // Menu, 
    // MenuItem, 
    // Tooltip, 
    // Avatar,
    // Button,
} from '@mui/material';


export default function LayoutMainFooter( ) {

    return(
        <>
            <Box sx={{color: 'primary.main', bgcolor: 'background.navBar'}}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters variant="dense">
                        Bottom Common Footer
                    </Toolbar>
                </Container>
            </Box>
        </>
    )
}