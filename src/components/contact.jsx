import React from 'react'

const Contact = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(rgb(23, 24, 23) 0%, rgb(14, 15, 14) 100%)',
      }}
    >
      <div className="mx-8 py-6">
        <h2 className="text-green-400 text-3xl font-bold mb-2">Contact</h2>
        <form id="contact">
          <label htmlFor="email" className="block">
            <span className="block text-green-500 text-sm mt-4">E-Mail</span>
            <input
              type="text"
              id="email"
              className="appearance-none bg-white shadow-inner py-2 px-4 rounded-md w-full text-gray-700 focus:bg-gray-200 focus:outline-none"
            />
          </label>
          <label htmlFor="message" className="block">
            <span className="block text-green-500 text-sm mt-4">Message</span>
            <textarea
              id="message"
              className="h-32 appearance-none bg-white shadow-inner py-3 px-4 rounded-md w-full text-gray-700 focus:bg-gray-200 focus:outline-none"
            />
          </label>
          <div className="text-center mt-4">
            <button
              type="button"
              className="m-auto py-1 px-20 rounded-md shadow-2xl"
              style={{
                background: 'linear-gradient(180deg, #04FF78 0%, #00AE50 100%)',
              }}
            >
              <span className="font-bold text-2xl text-white text-shadow-lg">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
