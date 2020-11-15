import React from 'react';
import Skillcard from './skill-card';
import CSS from '../assets/icons/css3.svg'

const skills = [
    {
        icon: CSS,
        title:"Frontend Development",
        about:"I can build beautiful and scalable web pages and landing pages from scratch",
    },
    {
        icon: CSS,
        title:"Stunning Dynamic Website",
        about:"A dynamic website is what keeps up to the mark information on the index as well as all internal pages.",
    },
    {
        icon: CSS,
        title:"CMS-based websites",
        about:"I specialized in offering CMS based website designing services for diverse types of business clients.",
    },
    {
        icon: CSS,
        title:"Website redesigning",
        about:"It is very important for every business that their websites should be redesigned regularly because it can improve your revenue.",
    }
]

const about =()=>{
    return(
        <div className="contentWrapper">
            <p className="h5">Creative Web designer with 1.5+ years of experience.</p>
            <ul>
                <li>Deep understanding and working experience in designing web pages from scratch</li>
                <li>Expertise in designing, developing, testing, and maintaining web pages and their code</li>
                <li>Ability to resolve designing problems with support and understand the requirements and its limitations</li>
                <li>Understanding of architecture components, strong fundamentals in HTML, CSS, Saas, Bootstrap etc. and aware of new changes</li>
                <li>Experience with mentoring team members</li>
            </ul>
            <div className="container p-0">
                <h2 className="h3">What I offer?</h2>
                <div className="row mt-4">
                    {
                        skills.map(skills =>
                            <Skillcard skills={skills} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default about;