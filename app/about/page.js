import './globals.css';

export default function AboutPage() {
  return (
    <main className="page-shell narrow">
      <section className="card">
        <p className="eyebrow">about</p>
        <h1>GrungeBot</h1>
        <p>
          GrungeBot is a raw, original songwriting assistant inspired by the emotional force,
          distortion, and live feel of grunge-era rock. It helps with lyrics, guitar riffs,
          drum patterns, and rough song structure without copying any existing artist or track.
        </p>
        <p>
          The project is designed to be a launchable web app and a starting point for a larger
          songwriting / production toolkit.
        </p>
        <a href="/" className="back-link">Back home</a>
      </section>
    </main>
  );
}
