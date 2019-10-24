import React, { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [subject, setSubject] = useState()

  const sendMail = async () => {
    if (email && message) {
      // eslint-disable-next-line
      const response = await fetch('https://cyftime.de/php/email.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message, subject }),
      })

      setEmail('')
      setSubject('')
      setMessage('')
    }
  }

  return (
    <div
      style={{
        background: 'linear-gradient(rgb(23, 24, 23) 0%, rgb(14, 15, 14) 100%)',
      }}
    >
      <div className="mx-8 py-6 lg:mx-64">
        <h2 className="text-green-400 text-3xl font-bold mb-2 inline-block mr-2">
          Contact
        </h2>
        <h1 className="text-green-400 text-3xl font-bold mb-2 inline-block">
          CYF
        </h1>
        <form id="contact">
          <label htmlFor="email" className="block">
            <span className="block text-green-500 text-sm mt-4">E-Mail</span>
            <input
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
              className="appearance-none bg-white shadow-inner py-2 px-4 rounded-md w-full text-gray-700 focus:bg-gray-200 focus:outline-none"
            />
          </label>
          <label htmlFor="subject" className="block">
            <span className="block text-green-500 text-sm mt-4">Subject</span>
            <input
              type="text"
              id="subject"
              onChange={e => setSubject(e.target.value)}
              className="appearance-none bg-white shadow-inner py-2 px-4 rounded-md w-full text-gray-700 focus:bg-gray-200 focus:outline-none"
            />
          </label>
          <label htmlFor="message" className="block">
            <span className="block text-green-500 text-sm mt-4">Message</span>
            <textarea
              id="message"
              onChange={e => setMessage(e.target.value)}
              className="h-32 lg:h-64 appearance-none bg-white shadow-inner py-3 px-4 rounded-md w-full text-gray-700 focus:bg-gray-200 focus:outline-none"
            />
          </label>
          <div className="text-center mt-4">
            <button
              type="button"
              className="m-auto py-1 px-20 rounded-md shadow-2xl focus:outline-none text-white hover:text-gray-400"
              onClick={() => sendMail()}
              style={{
                background: 'linear-gradient(180deg, #04FF78 0%, #007636 100%)',
              }}
            >
              <span className="font-bold text-2xl text-shadow-lg">Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
