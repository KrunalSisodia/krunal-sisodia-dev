import React from 'react';

const Skillcard = ({skills:{icon, title, about}}) =>
    <div className="col-lg-6">
            <div className="skill-card">
                <img src={icon} alt="icon" className="skillcardIcon" />
                <div className="skillcardBody">
                    <p className="font-weight-bold skillcardTitle">{title}</p>
                    <p className="skillcardBody">{about}</p>
                </div>
            </div>
    </div>
    
export default Skillcard;