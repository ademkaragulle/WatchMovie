import { Button, TextField } from '@mui/material'
import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function DropDownMenu({ setIsTrueDropDownMenu }) {
    return (
        <div className='asdf'>
            <div className='drop-down-menu-header'>
                <HiMenuAlt3 fontSize={'28px'} />
                <div className='title-text'>WatchMovie</div>
            </div>
            <div className='drop-down-menu-items'>
                <TextField sx={{ width: '100%', background: '#fff', marginBottom: '10px' }} id="outlined-basic" label="Serach" variant="outlined" />
                <div onClick={() => setIsTrueDropDownMenu(false)}><Button sx={{ width: '100%' }} color='secondary'><Link to={'/movies'} className='drop-down-genres'>Movies</Link></Button></div>
                <div onClick={() => setIsTrueDropDownMenu(false)}><Button sx={{ width: '100%' }} color='secondary'><Link to={'/series'} className='drop-down-genres'>Series</Link></Button></div>
            </div>
        </div>
    )
}

export default DropDownMenu