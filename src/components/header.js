import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { URLS }  from '../constants';

import styled from "styled-components"

// const HeaderLink = styled(Link)`
// color: 'white';
// `;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #c29215;
`

const Spaceline = () => <span> | </span>;

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 2rem`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#4e9a06`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 style={{ margin: 0, marginTop: 10, padding: 2, color: "#807c65" }}>
        <HeaderLink href={URLS.BLOG} target="_blank">blog</HeaderLink>
        <Spaceline />
        <HeaderLink href={URLS.RESUME} target="_blank">resume</HeaderLink>
        <Spaceline />
        <HeaderLink href={URLS.PROJECTS} target="_blank">projects</HeaderLink>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

// <span style={{ color: "#D3D7CF", fontWeight: "bold" }}>|</span>
export default Header
