import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import ImageGetter from './ImageGetter'

const projectsArray = [
  {
    name: 'Verses',
    url: '/verses/',
    imageName: 'cyf_verses_single_project.jpg',
    type: 'single',
  },
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
    <div className="text-center mt-1 mb-5 md:hidden">
      {eleArray.map((ele, i) => {
        const m = i
        return (
          <svg
            key={`i-${m}`}
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
    <div className="flex-shrink-0 w-full md:w-1/2 md:flex-shrink scroll-snap-align-center active-shrink lg:w-5/12 lg:m-auto xl:w-4/12">
      <Link to={project.url} className="focus:outline-none">
        <div className="m-auto mx-12 rounded-xl shadow-xl bg-opacity-10 pb-6 hover:bg-opacity-12">
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
      setScrollIndicator(Math.round(e.target.scrollLeft / e.target.clientWidth))
      // console.log('scroll', e.target.scrollLeft, 'of', e.target.clientWidth)
    })
  }, [setScrollIndicator])

  return (
    <div className="lg:mx-32">
      <div
        id="sidescroller"
        className="flex overflow-x-scroll w-full scroll-snap-type-x-mandatory scrollbar-hidden"
      >
        {projectsArray.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

const Projects = () => {
  const [scrollIndicator, setScrollIndicator] = useState(0)

  return (
    <div>
      <hr className="mx-10 border-opacity-16 my-8" />
      <div style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <h2
          id="projects"
          className="mx-8 lg:mx-64 text-green-200 text-3xl font-bold mb-8"
        >
          Projects
        </h2>
        <ProjectScroll setScrollIndicator={setScrollIndicator} />
        <ScrollIndicator
          scrollIndicator={scrollIndicator}
          elements={projectsArray.length}
        />
        <div className="text-center mt-4 mb-12">
          <Link to="/projects/">
            <button
              type="button"
              className="hidden text-gray-300 bg-green-600 tracking-wide rounded-full py-2 px-6 hover:text-500 font-bold focus:outline-none"
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
