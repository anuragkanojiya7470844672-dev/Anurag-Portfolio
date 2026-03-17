import React from 'react';

const Contact = () => (
  <section className="min-h-screen flex flex-col items-center px-4 pt-24">
    <h2 className="text-4xl font-bold mb-4">Contact</h2>
    <p className="text-lg mb-6">
      Have a question or a project in mind? Feel free to reach out.
    </p>
    <p className="mb-6">Location: Colombia, Valle del Cauca</p>
    <form className="w-full max-w-md flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="p-2 rounded bg-gray-700 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded bg-gray-700 focus:outline-none"
      />
      <textarea
        rows="4"
        placeholder="Message"
        className="p-2 rounded bg-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 rounded py-2"
      >
        Submit
      </button>
    </form>
  </section>
);

export default Contact;