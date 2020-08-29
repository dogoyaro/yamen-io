import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <h2 style={{ marginTop: '80px' }}>
      Yamen: A Full-stack developer and the greatest thing since sliced bread. Hit me up! and check out <a href="/">some of the stuff</a> I
      am doing.
    </h2>
  </Layout>
)

export default IndexPage
