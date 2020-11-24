import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={60}
          text="React JS"
        />
        <ProgressBar
          percent={85}
          text="Pug JS"
        />
        <ProgressBar
          percent={80}
          text="Saas"
        />
        <ProgressBar
          percent={70}
          text="Javascript"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={90}
          text="Html"
        />
        <ProgressBar
          percent={70}
          text="Adobe Photoshop"
        />
        <ProgressBar
          percent={65}
          text="Adobe Illustrator"
        />
        <ProgressBar
          percent={95}
          text="CSS3"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
