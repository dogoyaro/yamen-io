import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <h2 style={{ marginTop: '50px' }}>
      Yamen: The greatest thing since sliced bread. I will build the heck out of
      your project. Hit me up! or check out <a href="/">some of the stuff</a> I
      am doing.
    </h2>
    <p></p>
  </Layout>
)

export default IndexPage
