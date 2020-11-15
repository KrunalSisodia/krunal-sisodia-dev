import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

const [active, setActive] = useState('')

    useEffect (() => {
        let currentURL = window.location.href;
        console.log(currentURL);
        if(currentURL.endsWith('/'))
            setActive('About');
        else if(currentURL.endsWith('/projects'))
            setActive('Projects')
        else if(currentURL.endsWith('/resume'))
            setActive('Resume')
    }, [active])
    
    return(
        <div className="navbarWrapper navbar">
            <div className="navbarActive">
                {active}
            </div>
            <div className="navbarItems">
                <Link to="/">
                { active !== 'About' &&
                <div className="navbarItem" onClick={()=>setActive('About')}>About</div>
                }
                </Link>
                <Link to="resume">
                { active !== 'Resume' ? <div className="navbarItem" onClick={()=>setActive('Resume')}>Resume</div> :null
                }
                </Link>
                <Link to="projects">
                { active !== 'Projects' && <div className="navbarItem" onClick={()=>setActive('Projects')}>Projects</div> 
                }
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar;