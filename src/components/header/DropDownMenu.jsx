import { Button, TextField } from '@mui/material'
import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import SearchInput from './search/SearchInput'

function DropDownMenu({ setIsTrueDropDownMenu }) {
    return (
        <div className='right-side-bar'>
            <div className='drop-down-menu-header'>
                <HiMenuAlt3 fontSize={'28px'} />
                <div className='title-text'>WatchMovie</div>
            </div>
            <div className='drop-down-menu-items'>
                <SearchInput setIsTrueDropDownMenu={setIsTrueDropDownMenu}/>
                <div style={{marginTop:'30px'}} onClick={() => setIsTrueDropDownMenu(false)}><Button sx={{ width: '100%' }} color='secondary'><Link style={{ width: '100%' }} to={'/movies'} className='drop-down-genres'>Movies</Link></Button></div>
                <div onClick={() => setIsTrueDropDownMenu(false)}><Button sx={{ width: '100%' }} color='secondary'><Link style={{ width: '100%' }} to={'/series'} className='drop-down-genres'>Series</Link></Button></div>
            </div>
        </div>
    )
}

export default DropDownMenu