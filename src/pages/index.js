import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactTypingEffect from 'react-typing-effect';

const BlinkingCursor = () => (
  <ReactTypingEffect
    typingDelay="1000s"
    text=""
    style={{ color: "#D3D7CF", fontWeight: "bold" }}
  />
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <h2 style={{ marginTop: '50px' }}>
      Yamen: The greatest thing since sliced bread. I will build the heck out of
      your project. Hit me up! or check out <a href="/">some of the stuff</a> I
      am doing.
      <BlinkingCursor />
    </h2>
    <p></p>
  </Layout>
)

export default IndexPage
