// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Get in touch</h1>
    <p>Questions or problems? Requests for new patterns or colors? Write to me here: </p>
    <div>
    <form className='contactForm' method="post" action="https://formspree.io/xoqkevkq">
        <label className='contactLabel'>
            Name *
  <input classname='contactInput' type="text" name="name" />
        </label>
        <label className='contactLabel'>
            Email Address *
  <input classname='contactInput' type="email" name="_replyto" />
        </label>
        <label className='contactLabel'>
            Subject *
  <input classname='contactInput' type="text" name="subject" />
        </label>
        <label className='contactLabel'>
            Message *
  <textarea className='contactText' name="message"></textarea>
        </label>
        <input classname='contactInput' type="text" name="_gotcha" style={{ display: "none" }} />
        <div className='buttonFlex'>
            <button className='contactButton' type="submit">Submit</button>
        </div>
    </form>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
