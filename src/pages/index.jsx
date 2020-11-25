import React, {useEffect} from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import ReactGA from 'react-ga';
import { useEffect } from 'react';



export default () => (
  function App (){
    useEffect(()=>{
      ReactGA.initialize('UA-183952095-1');

      // to report page view
      ReactGA.pageview('/');
    },[])
  }
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
