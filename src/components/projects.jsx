import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import ImageGetter from './ImageGetter'

const projectsArray = [
  {
    name: 'Fast Life',
    url: '/fast-life/',
    imageName: 'cyf_fast_life_single_project.jpg',
    type: 'single',
  },
  {
    name: 'Bokassa',
    url: '/bokassa/',
    imageName: 'cyf_bokassa_ep_project.jpg',
    type: 'EP',
  },
]

const ScrollIndicator = ({ scrollIndicator, elements }) => {
  const eleArray = [...Array(elements)]
  return (
    <div className="text-center mt-1">
      {eleArray.map((_, i) => {
        return (
          <svg
            key={i}
            className="w-2 h-2 mx-2 inline-block"
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="5.5"
              fill="white"
              fillOpacity={scrollIndicator === i ? 0.33 : 0.17}
            />
          </svg>
        )
      })}
    </div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-full scroll-snap-align-center active-shrink">
      <Link to={project.url} className="focus:outline-none">
        <div className="m-auto mx-12 rounded-xl shadow-xl bg-opacity-10 pb-6">
          <h3 className="text-gray-300 text-3xl pt-3 pl-5 font-semibold">
            {project.name}
          </h3>
          <ImageGetter
            filename={project.imageName}
            alt="cyf bokassa ep cover"
            classes="mx-6 rounded-xl"
          />
        </div>
      </Link>
    </div>
  )
}

const ProjectScroll = ({ setScrollIndicator }) => {
  useEffect(() => {
    document.getElementById('sidescroller').addEventListener('scroll', e => {
      if (e.target.scrollLeft > e.target.clientWidth / 2) {
        setScrollIndicator(1)
      } else {
        setScrollIndicator(0)
      }
      // console.log('scroll', e.target.scrollLeft, 'of', e.target.clientWidth)
    })
  })

  return (
    <div
      id="sidescroller"
      className="flex overflow-x-scroll w-full scroll-snap-type-x-mandatory scrollbar-hidden"
    >
      {projectsArray.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  )
}

const Projects = () => {
  const [scrollIndicator, setScrollIndicator] = useState(0)

  return (
    <div>
      <hr className="mx-10 border-opacity-16 my-8" />
      <div style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <h2 className="mx-8 lg:mx-64 text-green-200 text-3xl font-bold mb-8">
          Projects
        </h2>
        <ProjectScroll setScrollIndicator={setScrollIndicator} />
        <ScrollIndicator
          scrollIndicator={scrollIndicator}
          elements={projectsArray.length}
        />
        <div className="text-center mt-3 mb-16">
          <Link to="/projects/">
            <button
              type="button"
              className="text-gray-300 bg-green-600 tracking-wide rounded-full py-2 px-6 hover:text-500 font-bold focus:outline-none"
            >
              All Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
