/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"
import SEO from "../../Seo"

const Experience = () => {
  return (
    <>
      <div>

        <h1 className="titleSeparate">Experience</h1>
        <p>
          <strong>Designation:</strong> Web Producer (March 2019 - July 2020)
        </p>
        <p>
          <strong>Company:</strong> Investis digital
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>
            Used and contributed to style guides and other design documentation
            to maintain coherent information and interaction design patterns.
          </li>
          <li>
            Built user interface, data visualizations and designed overall user
            experience.
          </li>
          <li>
            Created wireframes, screen-flow diagrams and UI spec documentation.
          </li>
          <li>
            Designed user interface and integrated into content management
            system to meet client specifications.
          </li>
          <li>
            Identified and eliminated website bugs to improve user experience.
          </li>
          <li>
            Designed user interface to meet client specifications and content
            management system.
          </li>
          <li>
            Evaluated user research to convert abstract ideas and requirements
            into planning tools such as journey maps, user personas and
            storyboards.
          </li>
          <li>
            Devised site maps, user flows, wireframes and mockups for designs
            based on proven methodologies, stakeholder requests and end-user
            feedback.
          </li>
        </ul>
        <hr />
      </div>
    </>
  )
}
export default Experience
