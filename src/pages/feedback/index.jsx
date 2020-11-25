import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const feedback = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact & feedback"
        description="Hello folks Krunal here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys, just remember Krunal is always open to talk about web
                    technologies.
                    Find me on github - KrunalSisodia"
        path="/contact"
        keywords={['KrunalSisodia', 'Krunal Sisodia', 'Krunal', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology', 'Web designer', 'UI/UX developer']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Feedback</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default feedback;
