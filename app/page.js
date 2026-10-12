'use client';

import { useState } from 'react';

const examples = {
  lyrics: 'A dead-end job, restless nights, and a city that keeps swallowing me whole.',
  guitar: 'Write a gritty E minor riff with palm-muted verse rhythm and a dirty chorus lead.',
  drums: 'Give me a punkish grunge drum groove with big snare, tight hats, and a tom fill before the chorus.',
  full: 'Write a grunge song about burnout, a broken relationship, and a lonely apartment at 3AM.',
};

export default function HomePage() {
  const [mode, setMode] = useState('full');
  const [idea, setIdea] = useState(examples.full);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode, idea }),
    });

    const data = await response.json();
    setResult(data.result || 'No result generated.');
    setLoading(false);
  }

  return (
    <main className="page-shell">
      <section className="hero card">
        <p className="eyebrow">grunge songwriting assistant</p>
        <h1>GrungeBot</h1>
        <p className="subhead">
          Write original lyrics, guitar riffs, and drum parts with a raw, live, early-90s grit.
        </p>
      </section>

      <section className="generator card">
        <form onSubmit={handleSubmit}>
          <div className="mode-grid">
            {['lyrics', 'guitar', 'drums', 'full'].map((option) => (
              <button
                key={option}
                type="button"
                className={mode === option ? 'mode-btn active' : 'mode-btn'}
                onClick={() => {
                  setMode(option);
                  setIdea(examples[option]);
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <label htmlFor="idea">Song idea</label>
          <textarea
            id="idea"
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            rows={7}
            placeholder="Describe your song idea, mood, theme, or the exact thing you want generated..."
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </form>
      </section>

      <section className="result card">
        <h2>Output</h2>
        <pre>{result || 'Your generated lyrics, riff, or drums will appear here.'}</pre>
      </section>

      <nav className="links card">
        <a href="/examples">View examples</a>
        <a href="/about">About the project</a>
      </nav>
    </main>
  );
}
