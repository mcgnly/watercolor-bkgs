// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Layout>
      <SEO title="License" />
      <h1>Usage License:</h1>
      <p>
        Free patterns are provided under a{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0
        </a>{" "}
        License and may be used for any purpose, including commercial use.
        Premium patterns are provided under a non-exclusive license (so,
        multiple people may buy the same pattern and use them) with no
        restrictions (again, including commercial use) except for redistribution
        of the patterns themselves. See our license text for more details.
      </p>
      <p>License text:</p>
      {isOpen ? (
        <>
          <svg
            width={10}
            viewBox="0 0 266 438"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginLeft: "10px",
            }}
            onClick={() => setOpen(!isOpen)}
          >
            <path
              d="m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"
              fill={"#fffff"}
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            width={10}
            viewBox="0 0 266 438"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginLeft: "10px",
              transform: "rotate(90deg)",
            }}
            onClick={() => setOpen(!isOpen)}
          >
            <path
              d="m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"
              fill={"#fffff"}
            />
          </svg>
          <p>
            By downloading a digital product from this site, you become the
            Licensee of the materials. All purchased digital downloads are
            Royalty-free. Royalty free does NOT mean free of charge.
          </p>
          <p>
            The term “royalty free” is used to describe a license for
            intellectual property like the digital downloads, which are sold
            here. Royalty-free means all fees are paid at the time of the
            purchase, instead of every time the item is used. All digital
            downloads are nontransferable and cannot be resold. Products can be
            used on websites, printing, promotions, etc. Pay once and it is
            yours for any purpose besides reselling. Because items are stock,
            they are considered non-exclusive. This means that others may have
            the exact same product as you. User License By downloading files
            from us, you are agreeing to the following End-User License
            Agreement or EULA and become a Licensee.
          </p>
          <p>Definition:</p>
          <p>
            “Licensed Material” refers to any still image, illustration,
            animation, digital file, audio file, video file, sound clip, or any
            other product that is protected by copyright or other intellectual
            property right, which is licensed to Licensee by us under the terms
            of this agreement. Any reference to Licensed Material shall be to
            each individual item within the Licensed Material and also to the
            Licensed Material taken as a whole.
          </p>
          <p>Grant of Rights:</p>
          <p>
            Licensee has the non-exclusive right to use the Licensed Material an
            unlimited number of times in any and all media, including
            entertainment, advertising and promotional materials, television,
            movies, and video exhibitions, print publications, physical
            products, electronic publications including web design, and other
            similar uses. Non-Exclusives Non-exclusive means that the same
            artwork is obtainable as provided for sale on this site by multiple
            customers. Licensee may alter, crop, manipulate, and create
            derivative works of the Licensed Material.
          </p>
          <p>Restrictions:</p>
          <p>
            Licensee may not sublicense, sell, assign, convey or transfer this
            License Agreement. Licensee may not sell, license, or distribute any
            derivative work containing the licensed material in a way that would
            allow a third party to download, extract, or access the Licensed
            Material as a standalone file. Licensee may not post the Licensed
            Material online in a downloadable format. License is for a single
            user only. Under no circumstances may the Licensed Material be used
            by more than one user. By downloading a digital product from this
            site, you become the Licensee of the materials. The Licensed
            Material may not be used in a pornographic, defamatory, or otherwise
            illegal manner, whether directly or in conjunction with other
            materials.
          </p>
        </>
      )}
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
