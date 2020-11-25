import React from 'react';
import { Row, Col } from 'antd';
import ReactGA from 'react-ga';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';


const pageText = {
  paraOne: `My name is Krunal Sisodia from Vadodara,Gujarat (india). I am a dynamic and multi-disciplined Web designer with a passion for creating innovative design solutions. I produce work that are memorable, meaningful and stand out.`,
  paraTwo: `I design and develop responsive websites using the most current technologies to provide the best user experience while satisfying customer needs. I am a fast learner who enjoys challenges and thrives in a fast paced, goal...`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Krunal', 'Krunal Sisodia', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'Web Designer', 'UI/UX developer']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Vadodara, GJ, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued BE in"
            textH3="Information Technology"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
