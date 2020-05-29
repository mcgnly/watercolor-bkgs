import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeroTileImages = () => {
  const data1 = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blue-hero-small.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div style={{ width: `200px`, marginBottom: `1.45rem` }}>
      <Img fixed={data1.placeholderImage.childImageSharp.fixed} />
    </div>)
  }

export default HeroTileImages