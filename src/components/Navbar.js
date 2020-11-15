import React, {useState} from 'react';

const Navbar = () =>{

const [active, setActive] = useState('About')

    return(
        <div className="navbarWrapper navbar">
            <div className="navbarActive">
                {active}
            </div>
            <div className="navbarItems">
                { active !== 'About' &&
                <div className="navbarItem" onClick={()=>setActive('About')}>About</div>
                }
                { active != 'Resume' ? <div className="navbarItem" onClick={()=>setActive('Resume')}>Resume</div> :null
                }
                { active!='Projects' && <div className="navbarItem" onClick={()=>setActive('Projects')}>Projects</div> }
                
            </div>
        </div>
    )
}

export default Navbar;