import React from 'react'

const Contact = () => {
  return (
    <div
      style={{
        background: '(180deg, #000000 0%, #0A130A 100%)',
      }}
    >
      <div className="mx-8 py-6">
        <h2 className="text-green-400 text-3xl font-bold mb-2">Contact</h2>
      </div>
      <form id="contact">
        <label htmlFor="email">
          E-Mail
          <input type="text" id="email" />
        </label>
        <label htmlFor="message">
          Message
          <input type="textarea" id="message" />
        </label>
        <button type="button">Send</button>
      </form>
    </div>
  )
}

export default Contact
