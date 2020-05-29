import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "blue-hero-small.png" }) {
          childImageSharp {
            fluid(quality: 95, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}

    render={data => {
      const imageData = [
      data.desktop.childImageSharp.fluid,
      ]

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          style={{
            height: '200px',
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 200px",
            display: 'flex',
            justifyContent: 'start',
            backgroundColor: '#bccdea',

          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
