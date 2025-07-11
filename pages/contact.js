export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 font-sans max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        Ready to partner with Tekstrate or have a question? Fill out the form below and we'll get back to you.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input type="text" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input type="email" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea className="w-full border rounded p-2" rows={5} required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </main>
  );
}
