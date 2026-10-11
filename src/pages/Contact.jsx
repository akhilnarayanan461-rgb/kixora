import { useState } from "react"
import "./Contact.css"

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function submitHandler(e) {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <section className="section container">
      <p className="eyebrow">LET'S TALK</p>
      <h1 className="page-title">Contact Kixora</h1>

      <p className="muted">
        Have a question about your next pair?
      </p>

      <form
        className="contact-form"
        onSubmit={submitHandler}
        onChange={() => setSubmitted(false)}
      >
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Message
          <textarea name="message" rows={6} required />
        </label>

        <button className="button" type="submit">
          Submit Demo Message
        </button>

        <p className="muted">
          Demo form only. Messages are not sent or stored.
        </p>

        {submitted && (
          <p role="status">
            Demo completed! Your form passed validation.
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact