import React, { useState } from 'react'
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { HiMenuAlt3 } from 'react-icons/hi'
import './style/Header.css'
import { Link } from 'react-router-dom'

const pages = ['Movies', 'Series']
const movieYears = ['2023', '2022', '2021', '2020', '2019', '2018']


function Header({ setIsTrueDropDownMenu }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div id='header' className='header-border'>
            <AppBar sx={{ background: '#212529', height: '5rem', position: 'static', display: 'flex', justifyContent: 'center' }}>
                <Container sx={{ maxWidth: 'none !important' }}>
                    <Toolbar className='header'>
                        <Link to="/">
                            <Typography
                                className='header-icon-title'
                                variant="h6"
                                noWrap
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            >
                                <img className='title-icon' src="/favicon.ico" alt="" />
                                <div className='title-text'>WatchMovie</div>
                            </Typography>
                        </Link>
                        <Typography
                            variant='a'
                            className='pages'
                            component="div"
                        >
                            <div className='pages-item'>
                                {pages.map((page) => {
                                    return (
                                        <Link key={page} to={`/${String(page).toLowerCase()}`}>
                                            <Button
                                                className='header-pages'
                                                variant='h6'
                                                component="button"
                                                sx={{
                                                    fontSize: '12px',
                                                    letterSpacing: '.1rem',
                                                }}
                                            >
                                                {page}
                                            </Button>
                                        </Link>
                                    )
                                })}
                                <input className='input-control' type="search" placeholder='Search Movie' />
                            </div>
                            <div onClick={() => setIsTrueDropDownMenu(true)} className='drop-down-menu'>
                                <HiMenuAlt3 fontSize={'28px'} />
                            </div>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}

export default Header