//@ts-check
/** State */
import React, { useState } from 'react';
/** Navigate */
import { useNavigate } from 'react-router-dom';
/** MUI */
import { 
    AppBar, 
    Toolbar, 
    Container, 
    Typography, 
    Box, 
    Slide, 
    useScrollTrigger, 
    IconButton, 
    Menu, 
    MenuItem, 
    Tooltip, 
    Avatar,
    Button,
    Paper,
} from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MenuIcon from '@mui/icons-material/Menu';
/** Assets */
import profileImg from './../../../static/images/avatar/logo-profile-01.png'


const settings = ['Login','Logout'];


export default function LayoutMainHeader( ) {

    /** Hide Bar when Scroll */
    const trigger = useScrollTrigger();

    /** Responsive Bar */
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    /** Navigate */
    const navigate = useNavigate();
    const navegarHome = (() => {
        navigate('/')
    })

    /** Mockup */
    let paginas = ['pagina-1', 'pagina-2', 'pagina-3']
    let configuracao = ['config-1', 'config-2', 'config-3']

    return(
        <>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar sx={{color: 'primary.main', bgcolor: 'background.navBar'}}  >
                    <Container maxWidth="xl" >
                        <Toolbar disableGutters variant="dense">

                            {/** BIG SCREENS */}
                            {/** Logo */}
                            <Box sx={{flexGrow: 1}}>
                                <Button >
                                    <EmojiObjectsIcon sx={{ 
                                        display: { xs: 'none', md: 'flex' }, 
                                        mr: 1,
                                    }} />
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.2rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        }}
                                    >
                                        Maiêutica
                                    </Typography>
                                </Button>
                            </Box>
                            {/** Paginas */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {paginas.map((page, index) => (
                                <Button
                                    key={`${page}-${index}`}
                                    onClick={() => navegarHome()}
                                    sx={{ my: 2, color: 'primary.veryLightMain', display: 'block' }}
                                >
                                    {`${page}-${index}`}
                                </Button>
                                ))}
                            </Box>

                            {/** SMALL SCREENS */}
                            {/** Menu */}
                            <Box sx={{ 
                                flexGrow: 10, 
                                display: { xs: 'flex', md: 'none' },
                                width: 50,
                            }}>
                                <IconButton 
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    
                                >
                                    <MenuIcon sx={{
                                        color: 'primary.lightestMain'
                                    }}/>
                                </IconButton>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ 
                                        display: {xs: 'block', md: 'none'}
                                    }}
                                >
                                    {paginas.map((page, index) => (
                                        <MenuItem key={`${page}-${index}`} onClick={() => console.log(`tela pequena pagina`)} sx={{
                                            color: 'primary.lightestMain',
                                        }}
                                        >
                                            <Typography textAlign="center">{`${page}-${index}`}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                                {/** Logo */}
                                <EmojiObjectsIcon sx={{my: 'auto'}} />
                            </Box>

                            {/** BIG & SMALL SCREENS */}
                            {/** Avatar */}
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="User Options">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Avatar" src={profileImg} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    >
                                    {configuracao.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{
                                                color: 'primary.lightestMain',
                                            }}>
                                            <Typography textAlign="center" >
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>
            <Box sx={{height: 80}} />
        </>
    )
}