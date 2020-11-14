import React from 'react'
import profilePic from '../assets/profilePic.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import facebook from '../assets/icons/facebook.svg'
import gmailDark from '../assets/icons/gmail-logo-dark.svg'
import whatsapp from '../assets/icons/whatsapp.svg'

const Sidebar =  () =>{
    return(
        <div className="sidebarContent">
            <div className="sidebarDetails">
                <p className="text-center">
                    <img src={profilePic} alt="" className="profilePicture" />
                </p>
                <p className="profileName">Krunal Sisodia</p>
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
            </div>
        </div>
    )
}

export default Sidebar;