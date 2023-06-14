import React from 'react'



function Footer() {
    const dateYear = new Date().getFullYear()

    return (
        <div className='footer'>
            <div> Copyright &copy; {dateYear} <a className='footer-link' href="https://github.com/ademkaragulle" target='_blank'>Adem Karagülle</a>.  |  All Rights Reserved </div>
        </div>
    )
}

export default Footer