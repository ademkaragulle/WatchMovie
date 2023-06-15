import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import SearchItems from './SearchItems';

function SearchInput({ setIsTrueDropDownMenu }) {
    const [value, setValue] = useState('')
    const [opensearchItems, setopensearchItems] = useState(false)

    const handleChange = (e) => {
        setValue(e.target.value)
        if (e.target.value.length > 2) {
            setopensearchItems(true)
        }
        if (e.target.value.length <= 2) {
            setopensearchItems(false)
        }
    }

    return (
        <div className='search-bar'>
            <div className='search-icon'>
                <SearchIcon />
            </div>
            <input onChange={(handleChange)} value={value} className='search-input-control' type="text" placeholder='Search...' />
            {opensearchItems ? < SearchItems setopensearchItems={setopensearchItems} setValue={setValue} setIsTrueDropDownMenu={setIsTrueDropDownMenu} value={value} /> : <div className='search-warning-message'>Please enter at least 3 characters...</div>}
        </div>
    )
}

export default SearchInput