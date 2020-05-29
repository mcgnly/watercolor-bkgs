import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BkgImage from "./leaderBkgImage"
const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        paddingTop: '30px'
      }}
    >
      <BkgImage>
        <h1 style={{ margin: '1em 4em',paddingTop: '30px' }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </BkgImage>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
