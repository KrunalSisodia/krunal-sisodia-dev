/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
/* eslint-disable linebreak-style */
import React from "react"
import { Layout } from "antd"
import Header from "../components/PageLayout/Header"
import SidebarWrapper from "../components/PageLayout/Sidebar"
import AboutMe from "../components/PageFragments/HomePage/AboutMe"
import Skills from "../components/PageFragments/HomePage/SkillProgress"
import Experience from "../components/PageFragments/HomePage/experience"

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Experience />
          <Skills />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
)
