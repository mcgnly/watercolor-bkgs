// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>This is a project by mcgnly labs. Check us out <a href="https://www.mcgnly.com">here</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
