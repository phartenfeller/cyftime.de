import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/layout'
import ProjectAvailable from '../components/projectAvailable'
import SEO from '../components/seo'

const Bokassa = () => {
  const data = useStaticQuery(graphql`
    query BokassaCover {
      image: file(relativePath: { eq: "cyf_bokassa_ep_cover.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Bokassa"
        description="The EP Bokassa from cyf is now out! Listen to the songs like restin, silkey, slifer and bokassa on spotify, apple music, soundcloud and more..."
      />
      <div
        className="pb-32 antialiased"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #091914 100%)',
        }}
      >
        <div className="mx-8 lg:w-3/4 lg:m-auto xl:w-1/2">
          <h1 className="text-4xl text-bold lg:text-5xl">EP: CYF - Bokassa</h1>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="cyf bokassa ep cover"
            className="m-auto shadow-2xl"
          />
          <ProjectAvailable />

          <iframe
            className="mt-16"
            loading="lazy"
            title="Bokassa on Soundcloud"
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/883249351&color=%23434352&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Bokassa
