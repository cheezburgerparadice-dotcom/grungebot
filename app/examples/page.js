import './globals.css';

export default function Page() {
  return (
    <main className="page-shell narrow">
      <section className="card">
        <p className="eyebrow">grunge songwriting assistant</p>
        <h1>Examples</h1>
        <div className="example-block">
          <h3>Lyrics</h3>
          <pre>{`Verse 1
The fluorescent buzz is chewing on my name
I drag the same old chains through the same old rain
The break room smells like rust and cheap coffee
I keep my mouth shut, let the panic grow`}</pre>
        </div>
        <div className="example-block">
          <h3>Guitar</h3>
          <pre>{`Key: E minor
Riff: Em - C - G - D
Palm-muted rhythm, let the high string ring at the chorus
Use slight feedback on the last beat of each phrase`}</pre>
        </div>
        <div className="example-block">
          <h3>Drums</h3>
          <pre>{`Tempo: 128 BPM
Verse: kick on 1 and 3, snare on 2 and 4
Chorus: louder snare, crash on 4, tom fill into bar 1`}</pre>
        </div>
        <a href="/" className="back-link">Back home</a>
      </section>
    </main>
  );
}
