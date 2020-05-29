import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FullTileImages from "../components/full-tile-images"
import FullTileImages2 from "../components/full-tile-images2"
import HeroTileImages from "../components/hero-tile-images"
import HeroTileImages2 from "../components/hero-tile-images2"
import HeroTileImages3 from "../components/hero-tile-images3"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        padding: "30px 100px",
        textAlign: "center",
      }}
    >
      <hr />
      <p>Aquarell.io is a collection of seamless watercolor patterns</p>
      <hr />
      <p>
        Buy them once and use them forever, for whatever you'd like. Our
        straightforward license has no usage restrictions, even for commercial
        use.{" "}
      </p>
      <p>Now, go build something great.</p>
      <hr />
    </div>
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h3>Background Patterns</h3>
      <p>These pattern well in all directions</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <FullTileImages/>
        <FullTileImages2 />
      </div>
    </div>
    <hr
      style={{
        margin: "30px 100px",
      }}
    />
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h3>Hero Patterns</h3>
      <p>These pattern well horizontally, less-so vertically</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <HeroTileImages />
        <HeroTileImages2 />
        <HeroTileImages3 />
      </div>
    </div>
    <hr
      style={{
        margin: "30px 100px",
      }}
    />
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "30px",
      }}
    >
      <Link to="/license/">License</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
    </div>
  </Layout>
)

export default IndexPage
