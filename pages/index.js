export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 font-sans">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Tekstrate</h1>
        <p className="text-xl mb-4">
          Strategic Technology. Intelligent Execution.
        </p>
        <p className="text-lg mb-10">
          We help businesses automate processes, integrate tools, monitor workflows,
          and drive value through smart dashboards, consulting, and training.
        </p>
        <nav className="flex justify-center gap-6 text-blue-600 font-semibold">
          <a href="/consulting" className="hover:underline">Consulting</a>
          <a href="/training" className="hover:underline">Training</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </section>

      <section className="max-w-6xl mx-auto mt-20 grid gap-10 md:grid-cols-3">
        <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">Process Automation</h2>
          <p>Streamline workflows and reduce manual effort with AI-led automation solutions.</p>
        </div>
        <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">Tool Integration</h2>
          <p>Connect ITSM platforms, business tools, and data sources seamlessly.</p>
        </div>
        <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">Monitoring & Insights</h2>
          <p>Deliver visibility through real-time dashboards and performance metrics.</p>
        </div>
      </section>

      <footer className="text-center mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} Tekstrate. All rights reserved.
      </footer>
    </main>
  );
}
