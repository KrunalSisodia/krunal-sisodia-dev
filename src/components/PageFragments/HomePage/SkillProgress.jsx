import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={75} text="Adobe XD" />
        <ProgressBar percent={60} text="Adobe Illustrator" />
        <ProgressBar percent={80} text="User interface design" />
        <ProgressBar percent={60} text="Adobe Photoshop" />
        <ProgressBar percent={80} text="Saas" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Html5" />
        <ProgressBar percent={85} text="CSS3" />
        <ProgressBar percent={70} text="Pug JS" />
        <ProgressBar percent={60} text="Javascript" />
        <ProgressBar percent={40} text="React JS" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
