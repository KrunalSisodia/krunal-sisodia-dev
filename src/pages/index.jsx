/* eslint-disable arrow-spacing */
/* eslint-disable linebreak-style */
import React, {useEffect} from 'react';
import { Layout } from 'antd';
import ReactGA from 'react-ga';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';

useEffect(()=>{
  ReactGA.initialize('UA-183952095-1');

  // to report page view
  ReactGA.pageview('/');
}, [])

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
