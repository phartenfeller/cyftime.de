import React from 'react'

const ProjectAvailable = ({ availability }) => {
  return (
    <div className="mt-6">
      <div className="text-green-200 font-bold text-xl lg:text-2xl xl:text-3xl">
        Available at:
      </div>
      <div className="m-auto flex flex-wrap">
        {availability.map(icon => {
          return (
            <div key={icon.name} className="w-1/2 mt-4">
              <a
                href={icon.url}
                className="text-green-500 hover:text-green-700 px-4 py-4 w-full truncate"
                title={icon.name}
                aria-label={icon.name}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-6 h-6 inline-block mr-3 lg:w-12 lg:h-12"
                >
                  <path d={icon.svgPath} />
                </svg>
                <span className="text-green-200 lg:text-lg">{icon.name}</span>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectAvailable
