import React from 'react'
import profilePic from '../assets/profilePic.svg'
import github from '../assets/icons/github-color.svg'
import linkedin from '../assets/icons/linkedin-color.svg'
import facebook from '../assets/icons/facebook-color.svg'
import gmailDark from '../assets/icons/gmail.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import react from '../assets/icons/react.svg'
import saas from '../assets/icons/saas.svg'
import pug from '../assets/icons/pug.svg'
import jquery from '../assets/icons/jquery.svg'
import html from '../assets/icons/html5.svg'
import css from '../assets/icons/css3.svg'
import bootstrap from '../assets/icons/bootstrap-4.svg'

const Sidebar =  () =>{
    return(
        <div className="sidebarContent">
            <div className="sidebarDetails">
                <p className="text-center">
                    <img src={profilePic} alt="" className="profilePicture" />
                </p>
                <h1 className="profileName">Krunal Sisodia</h1>
                <hr />
                <p className="profileOccupation">UI/UX developer | Web Designer</p>
            </div>
            <div className="sidebarContacts">
                <ul className="sidebarSocialIcons">
                    <li className="d-inline"><a href="https://github.com/KrunalSisodia"><img src={github} alt="Krunal Sisodia - Github" title="Krunal Sisodia - Github" /></a></li>
                    <li className="d-inline"><a href="https://www.linkedin.com/in/krunal-sisodia-48ba50124/"><img src={linkedin} alt="Krunal Sisodia - LinkedIn" title="Krunal Sisodia - LinkedIn" /></a></li>
                    <li className="d-inline"><a href="https://www.facebook.com/krunal.sisodia.1"><img src={facebook} alt="Krunal Sisodia - Facebook" title="Krunal Sisodia - Facebook" /></a></li>
                    <li className="d-inline"><a href="mailto:krunalsisodia@gmail.com"><img src={gmailDark} alt="Krunal Sisodia - Gmail" title="Krunal Sisodia - Gmail" /></a></li>
                    <li className="d-inline"><a href="https://wa.me/+919099480385/?text=urlencodedtext"><img src={whatsapp} alt="Krunal Sisodia - WhatsApp" title="Krunal Sisodia - WhatsApp" /></a></li>
                </ul>
                <p className="text-center"><a href="" className="profileResume" title="Krunal Sisodia - Resume">Download resume</a></p>
                <h2 className="sidebarProfileSkills text-center">Skills</h2>
                <hr />
                <ul className="sidebarSocialIcons profileSkills">
                    <li className="d-inline-block"><img src={react} alt="Krunal Sisodia - React js" title="React js" /></li>
                    <li className="d-inline-block"><img src={pug} alt="Krunal Sisodia - Pug.js" title="Pug.js" /></li>
                    <li className="d-inline-block"><img src={saas} alt="Krunal Sisodia - Saas" title="Saas" /></li>
                    <li className="d-inline-block"><img src={html} alt="Krunal Sisodia - HTML5" title="HTML5" /></li>
                    <li className="d-inline-block"><img src={css} alt="Krunal Sisodia - CSS3" title="CSS" /></li>
                    <li className="d-inline-block"><img src={jquery} alt="Krunal Sisodia - jQuery" title="jQuery" /></li>
                    <li className="d-inline-block"><img src={bootstrap} alt="Krunal Sisodia - Bootstrap 4" title="Bootstrap" /></li>
                </ul>
                <h2 className="sidebarProfileSkills text-center">Contacts</h2>
                <hr />
                <p className="text-center"><a href="tel:9099480385" className="text-dark">+91 90994 80385</a></p>
                
                <hr />
            </div>
        </div>
    )
}

export default Sidebar;