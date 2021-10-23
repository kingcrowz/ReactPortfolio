import React from 'react';
import { Link } from 'react-router-dom'; 

function nav ({currentPage, pageChange}) {
    return(
        <nav className='navbar'>
        <div className='links'>
            <Link to='/about'>[About Me]  </Link>
            <Link to='/portfolio'>[Portfolio]  </Link>  
            <Link to='/contact'>[Contact Me]  </Link>                                   
        </div>
    </nav>
    )
}

export default nav;