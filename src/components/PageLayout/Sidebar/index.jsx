/* eslint-disable linebreak-style */
import React from "react"
import { Affix, Layout, Row, Col } from "antd"
import FA from "react-fontawesome"
import FeatherIcon from "feather-icons-react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from "@reach/router"
import style from "./sidebar.module.less"
import { useWindowSize } from "../../../utils/hooks"
import Config from "../../../../config"

const { Content } = Layout
const {
  facebook,
  github,
  instagram,
  twitter,
  linkedin,
  behance,
} = Config.social

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          Krunal <span>Sisodia</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Web Designer</div>
      <div className="centerAlign box">
        <a
          href={github}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="github" />
        </a>
        <a
          href={linkedin}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="linkedin" />
        </a>
        <a
          href={facebook}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="facebook-f" />
        </a>
        <a
          href={twitter}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="twitter" />
        </a>
        <a
          href={behance}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="behance" />
        </a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />{" "}
          </span>
          &nbsp; &nbsp; Aug 22,1995
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="map-pin" />
          </span>{" "}
          &nbsp; &nbsp; Vadodara, Gujarat, India
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="mail" />
          </span>{" "}
          &nbsp; &nbsp;
          <a href="mailto:krunalsisodia@gmail.com" target="_blank">
            krunalsisodia@gmail.com
          </a>
        </li>
      </ul>
      <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">
          Download CV
        </a>
      </div>
    </div>
  </aside>
)

const Sidebar = props => {
  const [width] = useWindowSize()
  const { children } = props
  const { pathname } = globalHistory.location
  let domContent = <DomContent />
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    )
  }
  if (width < 768) {
    domContent = <></>
    if (pathname === "/") {
      domContent = <DomContent />
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              {domContent}
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout
                className={`${style.background} ${style.boxContent} borderRadiusSection`}
              >
                {children}
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

export const Sidebar404 = props => {
  const { children } = props
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout
              className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}
            >
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Sidebar
