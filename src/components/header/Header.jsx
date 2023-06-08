import React, { useState } from 'react'
import { Container, AppBar, Toolbar, Typography, Menu, MenuItem, Button, Fade } from '@mui/material'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './style/Header.css'
import { Link } from 'react-router-dom'

const pages = ['Movies', 'Series']
const movieYears = ['2023', '2022', '2021', '2020', '2019', '2018']


function Header() {
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
            <AppBar sx={{
                background: '#212529'
            }}>
                <Container>
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
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ color: '#fff', fontSize: '12px' }}
                                >
                                    Movie Years
                                    <MdKeyboardArrowDown style={{ fontSize: '24px' }} />
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    {
                                        movieYears.map((movie) => {
                                            return (
                                                <Link key={movie} to={`movie-year-${movie}`} style={{ color: '#393939' }}>
                                                    <MenuItem onClick={handleClose}>{movie}</MenuItem>
                                                </Link>
                                            )
                                        })
                                    }
                                </Menu>
                            </div>
                            <input className='input-control' type="search" placeholder='Search Movie' />
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}

export default Header