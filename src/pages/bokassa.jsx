import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/layout'
import ProjectAvailable from '../components/projectAvailable'
import SEO from '../components/seo'

const availability = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/album/2Ab1H4QhJuVKLr55p5rZ8X',
    svgPath:
      'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
  },
  {
    name: 'Apple Music',
    url:
      'https://geo.music.apple.com/us/album/_/1481651132?mt=1&app=music&at=1000lHKX',
    svgPath:
      'M23.997 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.164a10.497 10.497 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408a10.61 10.61 0 00-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a5.046 5.046 0 001.88-2.208c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.326.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.443-.088.664-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z',
  },
  {
    name: 'Soundcloud',
    url: 'https://soundcloud.com/cyftime/sets/bokassa',
    svgPath:
      'M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623a.134.134 0 00-.135-.135l-.031-.017zm1.155.36a.155.155 0 00-.159-.149c-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914a.211.211 0 00-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225a.231.231 0 00.225-.225l.195-2.52-.196-5.275a.23.23 0 00-.225-.225m1.245.045a.237.237 0 00-.24-.24.247.247 0 00-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134a.262.262 0 00-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307a.27.27 0 00-.271-.27m1.005.166a.285.285 0 00-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945a.31.31 0 00-.165-.044.313.313 0 00-.165.044.3.3 0 00-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18a.327.327 0 00.234.104c.08 0 .158-.044.209-.09a.314.314 0 00.091-.225l.015-.24.117-2.203-.135-6.086a.287.287 0 00-.135-.239l-.002-.022zm1.006-.547a.193.193 0 00-.15-.061.344.344 0 00-.209.061.314.314 0 00-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637a.333.333 0 00-.165-.277m8.934 3.777a2.93 2.93 0 00-1.139.232 5.204 5.204 0 00-5.188-4.736c-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952',
  },
  {
    name: 'YouTube',
    url:
      'https://www.youtube.com/watch?v=1o4mW0lEfTk&list=OLAK5uy_nIaVb0eFrGFKjYa3YSODQleL1sRVUqQNI',
    svgPath:
      'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/album/112737402',
    svgPath:
      'M14.717 18.695h4.375V17.37h-4.377v1.325h.002zm-9.81 0H9.28V17.37H4.906v1.325h.004zm-4.907 0h4.375V17.37H0v1.325zm9.81 0h4.38V17.37H9.81v1.325zm9.815 0H24V17.37h-4.375v1.325zm0-1.724H24v-1.32h-4.375v1.34-.01zm-9.814 0h4.39v-1.32H9.81v1.34-.01zm-9.81 0h4.38v-1.32H0v1.34-.01zm4.91 0h4.38v-1.32H4.91v1.34l.002-.01zm9.83 0h4.38v-1.32h-4.4v1.34l.017-.01zm0-1.72h4.38v-1.32h-4.4v1.33h.017zm-9.805 0h4.36v-1.32H4.91v1.33h.016zm-4.906 0h4.36v-1.32H0v1.33h.016zm9.81 0h4.38v-1.32h-4.4v1.33h.016zm9.825 0H24v-1.32h-4.375v1.33h.027zm0-1.72H24V12.2h-4.375v1.326h.027zm-9.81 0h4.363V12.2h-4.4v1.326h.033zm-9.81 0H4.4V12.2H0v1.326h.03zm14.73 0h4.38V12.2h-4.43v1.326h.044zm0-1.72h4.38v-1.33h-4.43v1.32h.044zm-14.73 0H4.4v-1.32H0v1.32h.03zm9.81 0h4.38v-1.32H9.81v1.32h.032zm9.81 0H24v-1.33h-4.375v1.328l.027-.002zM9.81 10.08h4.38V8.754H9.81v1.326zm9.815-.002H24V8.753h-4.375v1.325zM9.81 8.355h4.38V7.028H9.81v1.327zm9.815 0H24V7.028h-4.375v1.327zm0-1.725H24V5.304h-4.375V6.63z',
  },
  {
    name: 'Tidal',
    url: 'https://listen.tidal.com/album/118924159',
    svgPath:
      'M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zm4.03 4.004l3.979-3.979L24 7.996l-3.979 3.979z',
  },
  {
    name: 'Amazon',
    url: 'https://music.amazon.com/albums/B07YJ6NQGB?do=play',
    svgPath:
      'M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.15-.15-.15-.22 0-.047.02-.09.05-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.09.228.09.39v.15c0 .51-.14 1.11-.415 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z',
  },
  {
    name: 'Google Play',
    url:
      'https://play.google.com/store/music/album/Cyf_Bokassa?id=Bgwustsjuuya4igggcupdtkfmyy',
    svgPath:
      'M1.22 0c-.03.093-.06.185-.06.308v23.229c0 .217.061.34.184.463l11.415-12.093L1.22 0zm12.309 12.708l2.951 3.045-4.213 2.4s-5.355 3.044-8.308 4.739l9.57-10.184zm.801-.831l3.166 3.292c.496-.276 4.371-2.492 4.924-2.8.584-.338.525-.8.029-1.046-.459-.255-4.334-2.475-4.92-2.835l-3.203 3.392.004-.003zm-.803-.8l2.984-3.169-4.259-2.431S5.309 1.505 2.999.179l10.53 10.898h-.002z',
  },
]

const Bokassa = () => {
  const data = useStaticQuery(graphql`
    query BokassaCover {
      image: file(relativePath: { eq: "cyf_bokassa_ep_project.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
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
      <div className="pb-10">
        <div className="mx-8 md:w-3/4 md:m-auto lg:w-7/12 xl:w-1/2">
          <h2 className="text-xl text-green-600">EP</h2>
          <h1 className="text-3xl lg:text-5xl">CYF - Bokassa</h1>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="cyf bokassa ep cover"
            className="text-center shadow-2xl rounded-xl mx-8 mt-2 mb-5 md:h-6/12 md:w-6/12 lg:h-7/12 lg:w-7/12 md:m-auto lg:my-8"
          />
          <ProjectAvailable availability={availability} />

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
